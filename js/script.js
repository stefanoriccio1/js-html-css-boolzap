$(document).ready(function () {
  $('.icona_bottom.invio').click(function () {
    sendMessage();
  });
});

function sendMessage() {
  var input = $("#input_messaggio").val();
  if (input.length != 0){
  var nuovoMessaggio = $(".template.messaggio").clone();

  nuovoMessaggio.find("testo_messaggio").text(input);
  nuovoMessaggio.find("ora_messaggio").text('10:30');
  nuovoMessaggio.addClass('inviato');
  $('main_content.active').append(nuovoMessaggio);
}
}
