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

  $('.barra_ricerca').keyup(function(){
    var testo = $('.barra_ricerca').val().toLowerCase();
    var nomeDaTrovare = $(this).find('.info_utente > bold').text().toLowerCase();
    if(nomeDaTrovare == testo)


  })
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
    messaggioDiRisposta.find('.testo_messaggio').text('Ciao');
    messaggioDiRisposta.find('.ora_messaggio').text(orario);
    messaggioDiRisposta.addClass('ricevuto');
    $('.main_content.active').append(messaggioDiRisposta);
  }
}

function selezioneChat(){
  var mainContents = $('.main_content');
  // console.log(mainContents [0]);
  mainContents.removeClass('active');
  $(mainContents[$(this).attr('data-contact')]).addClass('active');

  var iconaDaCambiare = $('.avatar');
  var iconaCorrente = $(this).find('img').attr('src');
  iconaDaCambiare.attr('src', iconaCorrente);

  var nomeCorrente = $(this).find('p.bold').text();
  $('.nome_utente_chat p.nome_utente').text(nomeCorrente);
  }
