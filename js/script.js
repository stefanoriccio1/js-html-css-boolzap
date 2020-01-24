$(document).ready(function () {
  $('.icona_bottom.invio').click(function () {
    sendMessage();
  });
});

function sendMessage() {
  var input = $("#input_messaggio").val();
  if (input.length != 0){
  var nuovoMessaggio = $(".template.messaggio").clone();
  console.log(nuovoMessaggio);
}
}
