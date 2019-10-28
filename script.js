/* function toggleRSVP() {
    var x = document.getElementById("rsvp-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } */



$(document).ready(function(){
  $(".btn_fade").click(function(){
    $("#scroll-button").fadeOut();
  });
  $(".btn_fade_2").click(function(){
    $("#rsvp_button").fadeOut();
  });
  $(".btn_fade_2").click(function(){
    $("#rsvp-form").fadeIn();
  });
});