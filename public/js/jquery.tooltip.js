$(function() {
    //Функция проверки текстареа
    function cheakTexarea (obj) {

        if (obj.val().length > 100) {
            obj.addClass('b-call__input-error');
            obj.next('div').show();
        } else {
            obj.removeClass('b-call__input-error');
            obj.next('div').hide();
        }
    }

    //проверяем имя, оно не должно быть пустым
    $('#name').blur(function() {
        if ($(this).val().length == 0) {
            $(this).addClass('b-call__input-error');
            $(this).next('div').show();
        }
    });
    $('#name').focus(function() {
        $(this).removeClass('b-call__input-error');
        $(this).next('div').hide();
    });

    //проверяем телефон
    $('#phone').blur(function() {
        var val_phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

        if  (  !val_phone.test($(this).val())  ) {
            $(this).addClass('b-call__input-error');
            $(this).next('div').show();
        }
    });
    $('#phone').focus(function() {
        $(this).removeClass('b-call__input-error');
        $(this).next('div').hide();
    });

    $('.b-call__select').change(function() {
        console.log('df');
    });

    //провенряем длину текстарии
    $('.b-call__tarea').blur(function(){
        cheakTexarea($(this));
    }).keyup(function(){
        cheakTexarea($(this));
    });


    $('.b-call__callback-form').submit(function(){
        console.log('отправили форму');
        return false;
    });


});