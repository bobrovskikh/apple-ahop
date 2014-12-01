(function($){
    tooltip = function() {

        this._init = function(element, options) {

            var defaults = {
                tooltipElement: $(element),
                tooltipSide: "right",
                fix: false
            },
            settings = $.extend(defaults, options); 

            settings.tooltipElement.each(function(i){

                if (settings.fix == false) {
                    var tooltipElementHeight = $(this).actual( "outerHeight", { absolute : true } ),
                        tooltipWrapperHeight = $(this).parent(".tooltip-wrapper").actual( "outerHeight", { absolute : true } ),
                        tooltipElementWidth = $(this).actual( "outerWidth", { absolute : true } ),
                        tooltipWrapperWidth = $(this).parent(".tooltip-wrapper").actual( "outerWidth", { absolute : true } );

                    if (settings.tooltipSide == "left") {
                        $(this).addClass('tooltip-left').css({top:-(tooltipElementHeight/2 - tooltipWrapperHeight/2)});
                    }
                    else if (settings.tooltipSide == "right"){
                        $(this).addClass('tooltip-right').css({top:-(tooltipElementHeight/2 - tooltipWrapperHeight/2)});
                    }
                    else if (settings.tooltipSide == "top"){
                        $(this).addClass('tooltip-top').css({left: -((tooltipElementWidth - tooltipWrapperWidth)/2)});
                    }
                    else if (settings.tooltipSide == "bottom"){
                        $(this).addClass('tooltip-bottom').css({left: -((tooltipElementWidth - tooltipWrapperWidth)/2)});					
                    }					
                }
                else{
                    $(document).mousemove(function (pos) {
                        settings.tooltipElement.css({top: pos.clientY+10, left: pos.clientX+10});
                    });						
                }
            });			
            
        };
    };
    // Launch plugin
    $.fn.tooltip = function( options ){
        return this.each(function(){
            $( this ).data( "tooltip", new tooltip()._init( this, options ) );
        });
    };
})(jQuery);