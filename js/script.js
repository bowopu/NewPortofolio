$(document).ready(function () {
  $(".toggle-profile").click(function () {
    $(".id-card").slideToggle("slow");
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
      // $(".nav-name").hide("700");
      // $("#label" + $(this).attr("value")).show("700");
      value = $(this).attr("value");
    }
    console.log(value);
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
    console.log(windowSize);
  }
  $(window).resize(checkWidth);



  // Play Button Audio
  var x = false;
  $("#btnPlay").click(function(){
    if(x == false){
      $("#myAudio")[0].pause();
      x = true;
      $("#iconPlay").prop("src","assets/icon/play-circle-fill.svg");
      console.log("pause");
    } else {
      $("#myAudio")[0].play();
      x = false;
       $("#iconPlay").prop("src","assets/icon/pause-circle-fill.svg");
      console.log("play");
    }
  });
  $("#btnVolume").click(function(){
    if($("#myAudio").prop("muted")){
       $("#myAudio").prop("muted",false);
       $("#iconVolume").prop("src","assets/icon/volume-up.svg");
        console.log("unmute");
    } else {
       $("#myAudio").prop("muted",true);
       $("#iconVolume").prop("src","assets/icon/volume-mute.svg");
        console.log("mute");
    }
   
  });
});
