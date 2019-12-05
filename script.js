$(document).ready(function() {
    //invio del messaggio
    //intercetto il click

    $('.right-footer-icon.f-right').click(function() {
        // recupero il contenuto delL'input del messaggio
        invio_messaggio()
        
    });

    //intercetto il tasto INVIO
    $('.new-message-inputs').keypress(function(event) {
        console.log(event);
        //controllo se il tasto digitato corrisponde al tasto invio
        if (event.which == 13) {
            invio_messaggio()
            
        }
    })


// intercetto il focus nell'area di testo del messaggio
$('.new-message-inputs').focus(function() {
    
    $('.right-footer-icon.f-right i').toggleClass('fa fa-microphone fas fa-paper-plane');
    });
    

// intercetto l'uscita del focus dall'area di testo del messaggio
$('.new-message-inputs').blur(function() {
    
    $('.right-footer-icon.f-right i').toggleClass('fa fa-microphone fas fa-paper-plane');
});

//quando digita qualcosa
//Keyup avviene quando è stato digitato il testo (quando utente rilascia il tasto), keydown e keypress non sono quindi idonei

$('input#contacts-filter').keyup(function(){
//vado a vedere cos'hai scritto (recupero il testo digitato nella ricerca)
var testo_ricerca = $(this).val();
if(testo_ricerca.length != 0) {
//vado a vedere per ognuno di essi se corrisponde a un elemento della mia lista (funzione.each mi aiuta)
//quelli che non corrispondono li devo nascondere
 $('div.contact').each(function(){
     //find mi permette di cercare un elemento figlio a qualsiasi livello
     //val si usa sull'input, text mi prende il contenuto testuale
     var nome_contatto = $(this).find('.contact-name').text();
     //trasformo in minuscolo entrambe le stringhe
     testo_ricerca = testo_ricerca.toLowerCase();
     nome_contatto = nome_contatto.toLowerCase();
    
     if (nome_contatto.includes(testo_ricerca)) {
     //il nome corrisponde al testo ricercato? Se si visulizzo il contatto corrispondente
     $(this).show();
 } else {
     //il nome viene nascosto
     $(this).hide();
 }
});
} else {
    // se l'utente non ha digitato nulla nella ricerca => visualizza tutti i contatti
    $('div.contact').show();
}
 });


function invio_messaggio() {
    var testo_messaggio = $('.new-message-inputs').val();
    if (testo_messaggio.length != 0) {
        // clono il template del messaggio
        var nuovo_messaggio = $('.template .message').clone();

        //inserisco nel giusto span il teto del messaggio
        nuovo_messaggio.children('.message-text').text(testo_messaggio);

        // aggiungo al div .message la classe sent

        nuovo_messaggio.addClass('sent');
        //inserisco il messaggio all'interno del container

        $('.right-messages.active').append(nuovo_messaggio);

        //resetto l'input con una stringa vuota

        $('.new-message-inputs').val('');
    }

        //risposta del pc con scritto 'ok'
        setTimeout(risposta_computer,1000);
};

function risposta_computer() {
    //clono il template del invio_messaggio
    var messaggio_risposta  = $('.template .message').clone();
    //inserisco nel giusto span il testo del messaggio
    messaggio_risposta.children('.message-text').text('ok');
    //aggiungo al div .message la classe received
    messaggio_risposta.addClass('received');
    // inserisco il messaggio all'interno del container
    $('.right-messages.active').append(messaggio_risposta);

}


$('.contact').click(function() {
    var seleziona_conversazione = $(this).attr('data-codice');
    $('.contact').removeClass('active');
    $(this).addClass('active');
    $('.right-messages').removeClass('active');
    $('.right-messages[data-codice="' + seleziona_conversazione + '"]').addClass('active');
})

});
