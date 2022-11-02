$(document).ready(function () {
  $("audio").addClass("clip");
  $("button").addClass("drum-pad");

  $("button").on("click", function (event) {
    const $play = $("#" + $(event.target).text());
    const $this = $(this);
    const letter = $(event.target).text();
    const rando =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";

    $("html").css("background-color", rando);
    $(".yeah").addClass("shakey");

    $(this).addClass("clicked");
    $("#display").html($this.attr("id"));

    $play.get(0).play();

    setTimeout(function () {
      $("#display").html("");
      $(".yeah").removeClass("shakey");

      $this.removeClass("clicked");
    }, 200);
  });

  $(document).keydown(function (x) {
    switch (x.which) {
      case 81:
        $("#heater-1").trigger("click");
        break;
      case 87:
        $("#heater-2").trigger("click");
        break;
      case 69:
        $("#heater-3").trigger("click");
        break;
      case 65:
        $("#heater-4").trigger("click");
        break;
      case 83:
        $("#clap").trigger("click");
        break;
      case 68:
        $("#open-HH").trigger("click");
        break;
      case 90:
        $("#kick-n-hat").trigger("click");
        break;
      case 88:
        $("#kick").trigger("click");
        break;
      case 67:
        $("#closed-HH").trigger("click");
        break;}

  });
});