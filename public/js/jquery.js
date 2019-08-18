/* eslint-disable no-unused-vars */
var interval;
$(".death").hide();
$(document).ready(function() {
  console.log("jQuery");
  $(".attack").hide();
  $(".death").hide();
  queryURL = "/api/enemies";
});

var health = parseInt($(".active", this).attr("data-health"));
console.log(health);

// console.log($(".active").attr("strength"));

console.log($(".player3-idle", this).attr("health"));
$(document).on("click", "#action-btn", function() {
  console.log($(this).attr("value"));
  clearInterval(interval);

  if ($(this).attr("value") === "attack") {
    console.log("attacking");
    $(".idle").hide();
    $(".attack").show();
    setTimeout(attackAnimation, 1000);
  }
});

function attackAnimation() {
  $(".idle").show();
  $(".attack").hide();
}

$(document).on("click", "#start-game", function() {
  console.log($(this).attr("value"));
});
