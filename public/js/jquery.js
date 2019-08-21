/* eslint-disable no-unused-vars */
var enemySelect;
var interval;
var enemyHealth;
var enemyStrength;
var enemyDefense;
function attackAnimation() {
  $(".player-idle").show();
  $(".player-attack").hide();
}
function healAnimation() {
  $(".heal").hide();
}

function enemyAttack() {
  $(".enemy-idle").hide();
  $(".enemy-attack").show();
  setTimeout(enemyAttackAnimation, 2000);
}

function enemyAttackAnimation() {
  $(".enemy-idle").show();
  $(".enemy-attack").hide();
}

$(".player-death").hide();
$(".heal").hide();
$(document).ready(function() {
  console.log("jQuery");
  $(".player-attack").hide();
  $(".player-death").hide();
  $(".heal").hide();

  // var health = parseInt($(".active", this).attr("data-health"));
  // console.log(health);

  // console.log($(".active").attr("strength"));

  // console.log($(".player3-idle", this).attr("health"));
  $(document).on("click", "#action-btn", function() {
    console.log($(this).attr("value"));
    clearInterval(interval);

    if ($(this).attr("value") === "attack") {
      console.log("attacking");
      $(".player-idle").hide();
      $(".player-attack").show();
      setTimeout(attackAnimation, 1000);
    } else if ($(this).attr("value") === "recover") {
      console.log("recovering");
      $(".heal").show();
      setTimeout(healAnimation, 2000);
    }
  });

  $(document).on("click", "#start-game", function() {
    console.log($(this).attr("value"));
    enemySelect = 0;
    queryURL = "/api/enemies/";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(enemy) {
      console.log(enemy[enemySelect].image_death);
      //Enemy attack
      attackingDiv = $(".enemy-forward");
      console.log(attackingDiv);
      attackAnimationDiv = $("<div>");
      attackAnimationDiv.attr(
        "class",
        "enemy" + enemySelect + "-attack enemy-attack enemy"
      );
      enemyAttackImage = $("<img>");
      enemyAttackImage.attr("src", enemy[enemySelect].image_attack);
      enemyAttackImage.attr("style", "min-height:300.6px;");
      console.log(attackAnimationDiv);
      attackAnimationDiv.append(enemyAttackImage);
      attackingDiv.append(attackAnimationDiv);
      //Enemy idle
      enemyVisibleDiv = $(".enemy-visible-div");
      enemyIdleDiv = $("<div>");
      enemyIdleDiv.attr("class", "enemy-idle");
      enemyIdleImage = $("img");
      enemyIdleImage.attr(
        "class",
        "enemy" + enemySelect + "-idle idle enemy active"
      );
      enemyIdleImage.attr("data-health", enemy[enemySelect].health);
      enemyHealth = enemy[enemySelect].health;
      enemyIdleImage.attr("data-strength", enemy[enemySelect].strength);
      enemyIdleImage.attr("data-defense", enemy[enemySelect].defense);
      enemyIdleImage.attr("src", enemy[enemySelect].image_idle);
      enemyIdleImage.attr("style", "min-height:300.6px");
      enemyIdleDiv.append(enemyIdleImage);

      //Enemy Death
      enemyDeathDiv = $("<div>");
      enemyDeathDiv.attr("class", "enemy-death");
      enemyDeathImage = $("<img>");
      enemyDeathImage.attr(
        "class",
        "player" + enemySelect + "-death death enemy active"
      );
      enemyDeathImage.attr("src", enemy[enemySelect].image_death);
      enemyDeathImage.attr("style", "min-height:300.6px;");
      enemyDeathDiv.append(enemyDeathImage);
      $(".enemy-death").hide();

      enemyVisibleDiv.append(enemyIdleDiv);
      enemyVisibleDiv.append(enemyDeathDiv);
      // $(".enemy-attack").hide();
      // $(".enemy-death").hide();
      // $(".enemy-idle").show();
      // $(".player-attack").hide();
      // $(".player-death").hide();
      // $(".heal").hide();
      // $(".player-idle").show();
      // console.log(enemy);
      // $(".enemy-forward").show();
    });
    // enemySelect++;
  });
});
