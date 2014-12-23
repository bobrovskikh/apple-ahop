(function() {
    $.fn.myslider = function() {
        
        var viewUL = $('div.b-slider').children('ul'),
            imgs = viewUL.find('img'),
            imgW = 740,
            imgLen = imgs.length,
            totalImgW = imgW * imgLen,
            current = 1; //номер картинки

        //убераем горизонтальный скролинг
        $('.b-slider').css("overflow","hidden");
        //показываем кнопки пролистывания
        $('.b-slider__arrows').show()
            //находим кнопки пролистывания и вещаем на их клик функцию
            .find('span').on('click', function (){
                //смотрим какая кнопка нажата
                var direction = $(this).attr('id'),
                    position = imgW;

                if ($('#b-slider__arrows-status').val() == 0 ) {
                    return false;
                }

                $('#b-slider__arrows-status').val(0);

                (direction === "next") ? ++current : --current;
                if (current === 0) {
                    current = imgLen;
                    direction = 'next';
                    position = totalImgW - imgW;
                } else if (current-1 === imgLen) {
                    current = 1;
                    position = 0;

                }

                slide(viewUL, position, direction);

               //console.log(current);
        });

        function slide(container, position, direction) {
            var sing; // либо -= либо +=
            if (direction && position !==0) {
                sing = (direction === "next") ? '-=' : '+=';
            }
            container.animate({
                    'margin-left' : sing ? (sing+position) : position
            }, 500, 'swing');
            $('#b-slider__arrows-status').val(1);
        }      
    }
})(jQuery);