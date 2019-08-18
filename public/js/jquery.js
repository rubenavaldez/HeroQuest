/* eslint-disable no-unused-vars */
var interval;
$(".death").hide();
$(".heal").hide();
$(document).ready(function() {
  console.log("jQuery");
  $(".attack").hide();
  $(".death").hide();
  $(".heal").hide();
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
  } else if ($(this).attr("value") === "recover") {
    console.log("recovering");
    $(".heal").show();
    setTimeout(healAnimation, 2000);
  }
});

function attackAnimation() {
  $(".idle").show();
  $(".attack").hide();
}

$(document).on("click", "#start-game", function() {
  console.log($(this).attr("value"));
});

function healAnimation() {
  $(".heal").hide();
}

function enemyAttack(){
  $(".enemy-idle").hide();
  $(".enemy-attack").show();
  setTimeout(enemyAttackAnimation, 2000);
}

function enemyAttackAnimation (){
  $(".enemy-idle").show();
  $(".enemy-attack").hide();
}