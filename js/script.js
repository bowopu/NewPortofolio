$(document).ready(function () {
  $(".toggle-profile").click(function () {
    var src = $("#toggleProfile").attr("src");
    var newsrc = (src=="assets/icon/humburger.svg") ? "assets/icon/x.svg" : "assets/icon/humburger.svg";
    $("#toggleProfile").attr("src", newsrc);
    $("aside").slideToggle("slow");

  });
  $(window).scroll(function (event) {
    var sc = $(window).scrollTop() + 20;
    let home_offset = $("#home").offset(),
      work = $("#workspage").offset(),
      about = $("#aboutpage").offset(),
      contact = $("#contactpage").offset();

    if (sc == 20) {
      $(".nav-name").removeClass("active");
      $("#label1").addClass("active");
    } else if (sc > work.top && sc < about.top) {
      $(".nav-name").removeClass("active");
      $("#label2").addClass("active");
    } else if (sc > about.top && sc < contact.top) {
      $(".nav-name").removeClass("active");
      $("#label3").addClass("active");
    } else if (sc > contact.top) {
      $(".nav-name").removeClass("active");
      $("#label4").addClass("active");
    }
  });

  var value = 1;
  function toogleIcon() {
    if (value == $(this).attr("value")) {
      return;
    } else {
      $(".nav-name").removeClass("active");
      $("#label" + $(this).attr("value")).addClass("active");
      value = $(this).attr("value");
    }
  }
  $(".btn-icon").click(toogleIcon);

  function checkWidth() {
    var windowSize = $(window).width();

    if (windowSize > 576) {
      $(".id-card").show("");
      if (windowSize < 1300) {
        $(".id-card").css("overflow", "scroll");
        console.log("overflow none");
      } else {
        $(".id-card").css("overflow", "hidden");
      }
    }
  }
  $(window).resize(checkWidth);



  // Play Button Audio
  var x = false;
  $("#btnPlay").click(function(){
    var src = $("#iconPlay").attr("src");
    var newsrc = (src=="assets/icon/pause-circle-fill.svg") ? "assets/icon/play-circle-fill.svg" : "assets/icon/pause-circle-fill.svg";
    $("#iconPlay").attr("src", newsrc);

    if(x == false){
      $("#myAudio")[0].pause();
      x = true;
    } else {
      $("#myAudio")[0].play();
      x = false;
  }
  });
  $("#btnVolume").click(function(){
    if($("#myAudio").prop("muted")){
       $("#myAudio").prop("muted",false);
       $("#iconVolume").prop("src","assets/icon/volume-up.svg");
    } else {
       $("#myAudio").prop("muted",true);
       $("#iconVolume").prop("src","assets/icon/volume-mute.svg");
    }
   
  });
});
