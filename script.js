$(document).ready(function() {
    
    var messaggio = $('.messaggi.template').clone();
    
    messaggio.removeClass('template').addClass('inviati');
    
    $('.parte-centrale').append(messaggio);
    
    var messaggio = $('.messaggi.template').clone();
    
    messaggio.removeClass('template').addClass('inviati');
    
    $('.parte-centrale').append(messaggio);
    

});
