$(document).ready (function(){
  var messaggioUtente = $(".messaggio_utente_template");
  var input = $("#input_messaggio");
  var data = new Date();
  var ora = data.getHours() + ":" + data.getMinutes();
  // var clone = $("#messaggio_utente_template.").clone();
  // console.log(clone);
  // $('#main_content').append(clone);
  // messaggioUtente.children('p').text('ciao');
  // messaggioUtente.children('span').text('11:20');

  $(".fas.fa-microphone").on( "click", function() {
  messaggioUtente.children('p').text(input.val());
  messaggioUtente.children('span').text(ora);
})

$(".lista_messaggi li").on("click", function(){
  $(this).remove();
})
});
