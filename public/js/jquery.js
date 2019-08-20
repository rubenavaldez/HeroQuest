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
  enemySelect = 1;
  queryURL = "/api/enemies/" + enemySelect;
  console.log(queryURL)
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(enemy) {

    attackingDiv = $(".enemy-forward");
    attackAnimationDiv = $("<div>");
    attackAnimationDiv.attr(
      "class",
      "enemy" + enemySelect + "-idle enemy-attack enemy"
    );
    attackAnimationDiv.attr("src", enemy.image_attack);
    attackAnimationDiv.attr("style", "min-height:300.6px;");
    console.log(attackAnimationDiv);
    attackingDiv.append(attackAnimationDiv);

    enemyVisibleDiv = $(".enemy-visible-div");
    enemyIdleDiv = $("<div>");
    enemyIdleDiv.attr("class", "enemy-idle");
    enemyIdleImage = $("img");
    enemyIdleImage.attr(
      "class",
      "enemy" + enemySelect + "-idle idle enemy active"
    );
    enemyIdleImage.attr("data-health", enemy.health);
    enemyHealth = enemy.health;
    enemyIdleImage.attr("data-strength", enemy.strength);
    enemyIdleImage.attr("data-defense", enemy.defense);
    enemyIdleImage.attr("src", enemy.death);
    enemyIdleImage.attr("style", "min-height:300.6px");
    enemyIdleDiv.append(enemyIdleImage);


    enemyDeathDiv = $("<div>");
    enemyDeathImage = $("<img>");
    enemyDeathImage.attr("class", "player" + enemySelect + "-death");
    enemyDeathImage.attr("src", enemy.image_death);
    enemyDeathImage.attr("style", "min-height:300.6px;");
    enemyDeathDiv.append(enemyDeathImage);
    enemyVisibleDiv.append(enemyIdleDiv);
    enemyVisibleDiv.append(enemyDeathImage);
    $("enemy-attack").hide();
    $("enemy-death").hide();
    $("enemy-idle").show();
    console.log(enemy);
  });
  enemySelect++;
});

function healAnimation() {
  $(".heal").hide();
}

function enemyAttack(){
  $(".enemy-idle").hide();
  $(".enemy-attack").show();
  setTimeout(enemyAttackAnimation, 2000);
}

function enemyAttackAnimation() {
  $(".enemy-idle").show();
  $(".enemy-attack").hide();
}