$(document).ready(function () {
  $('.icona_bottom.invio').click(function () {
    sendMessage();
  });
  $("#input_messaggio").on('keypress', function(event){
    if (event.which == 13){
      sendMessage();
    }
  });
  $('.lista_chat li').click(selezioneChat);
});

// funzioni
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
    setTimeout(risposta, 2000);
  }

  function risposta(){
    var messaggioDiRisposta = $('.template > .messaggio').clone();
    var data = new Date();
    var orario = data.getHours() + ':' + data.getMinutes();
    messaggioDiRisposta.find('.testo_messaggio').text('ok');
    messaggioDiRisposta.find('.ora_messaggio').text(orario);
    messaggioDiRisposta.addClass('ricevuto');
    $('.main_content.active').append(messaggioDiRisposta);
  }
}

function selezioneChat(){
  $('.main_content').removeClass('active');

  }
