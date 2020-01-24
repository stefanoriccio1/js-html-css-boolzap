$(document).ready (function(){
  var messaggioUtente = $("#messaggio_utente_template");
  var input = $("#input_messaggio");
  // messaggioUtente.children('p').text('ciao');
  // messaggioUtente.children('span').text('11:20');

  $(".fas.fa-microphone").on( "click", function( event ) {
  messaggioUtente.children('p').text( input.val());
})

});
