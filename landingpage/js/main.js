$(function(){
    $('button').click(function(){
        $('#popupContainer').css('display', 'flex');
    });

    $('#popupContainer').click(function(event){
        if(event.target === this) {
            $('#popupContainer').css('display', 'none');
        }
    });

    $('#sendButton').click(function(){
        var moneyAmount = $('#moneyAmount').val();
        if(moneyAmount <= 0) {
            alert('Введите число!');
        } else {
            $.post('/api.php', {'moneyAmount' : moneyAmount}, function(response){
                alert(response);
            });
        }
    });
});