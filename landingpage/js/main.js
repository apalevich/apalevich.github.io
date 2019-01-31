$(function(){

    $('#form-answer').hide(0);

    $('button').click(function(){
        if(event.target === this) {
            $('#popupContainer').css('display', 'flex');
        }
    });

    $('#popupContainer').click(function(event){
        if(event.target === this) {
            $('#popupContainer').css('display', 'none');
        }
    });

    $('#send-button').click(function(){
        $("form").css('display', 'none');
        $("#form-answer").css('display', 'block');
    });
});