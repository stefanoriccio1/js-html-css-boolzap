$(document).ready(function () {
  $('.icona_bottom.invio').click(function () {
    sendMessage();
  });
});

function sendMessage() {
  var input = $("#input_messaggio").val();
  if (input.length != 0){
    var nuovoMessaggio = $(".template > .messaggio").clone();
    var data = new Date();
    var orario = data.getHours() + ':' + data.getMinutes();
    nuovoMessaggio.find(".testo_messaggio").text(input);
    nuovoMessaggio.find(".ora_messaggio").text(orario);
    nuovoMessaggio.addClass('inviato');
    $('.main_content.active').append(nuovoMessaggio);

    $("#input_messaggio").val('');
  }

  function risposta(){
    var messaggioDiRisposta = $('.template > .messaggio').clone();
    var data = new Date();
    var orario = data.getHours() + ':' + data.getMinutes();
    messaggioDiRisposta.find('testo_messaggio').text('ok');
    messaggioDiRisposta.find('ora_messaggio').text('orario');
    $('main_content.active').append(messaggioDiRisposta);

  }
}
