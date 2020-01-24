$(document).ready (function(){
  var messaggioUtente = $("#messaggio_utente_template");
  // messaggioUtente.children('p').text('ciao');
  // messaggioUtente.children('span').text('11:20');
  $( "#input_messaggio" ).on( "keypress", function( event ) {
  messaggioUtente.children('p').html( event.type + ": " +  event.which );
})
});
