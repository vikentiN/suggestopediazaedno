/* ausführen, wenn html-seite geladen wurde */
$(document).ready(function () {
  /* sendung formular abfangen */
  $("#contactform").submit(function () {

    /* ajax objekt zum aufruf & versand an das skript
     'name' und 'email' sind in der data-zeile die variablen für das php-skript */
    $.ajax({
      type: "POST",
      url: "php/formsend.php",
      data: "name=" + $("#name").val() + "&email=" + $("#email").val() + "&message=" + $("#message").val(),
      success: function (msg) {
        /* form-div verstecken, seite nachladen & wieder einblenden (2000 ms) */
        $("#formdiv").hide().load("thankyou.html").fadeIn(2000);
      }
    });

    /* wichtig!
     sonst schickt der browser das formular ab und
     und ruft die seite auf die bei action="#" hinterlegt wurde.
     dann verlässt er nämlich die bisherige seite... */
    return false;

  });

});