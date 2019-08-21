var enemySelect;
var interval;
var enemyHealth;
var enemyStrength;
var enemyDefense;
var deathTime;

$(window).on("load", function() {
  console.log($(this).attr("value"));
  enemySelect = 2;
  queryURL = "/api/enemies/";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (enemy) {
    console.log(enemy[enemySelect].image_death);
    //Enemy attack
    attackingDiv = $(".enemy-forward");
    console.log(attackingDiv);
    attackAnimationDiv = $("<div>");
    attackAnimationDiv.attr(
      "class",
      "enemy" +
      enemySelect +
      "-attack enemy-attack enemy " +
      enemy[enemySelect].name +
      "_attack"
    );
    enemyAttackImage = $("<img>");
    enemyAttackImage.attr("src", enemy[enemySelect].image_attack);
    enemyAttackImage.attr("style", "min-height:300.6px;");
    console.log(attackAnimationDiv);
    attackAnimationDiv.append(enemyAttackImage);
    attackingDiv.append(attackAnimationDiv);

    enemyVisibleDiv = $(".enemy-visible-div");
    enemyIdleDiv = $("<div>");
    enemyIdleDiv.attr("class", "enemy-idle");

    enemyIdleImage = $("<img>");
    enemyIdleImage.attr(
      "class",
      "enemy" +
        enemySelect +
        "-idle idle enemy active enemy-idle" +
        enemy[enemySelect].name +
        "_idle"
    );
    enemyIdleImage.attr("src", enemy[enemySelect].image_idle);
    enemyIdleDiv.append(enemyIdleImage);
    enemyVisibleDiv.append(enemyIdleDiv);

    enemyDeathDiv = $("<div>");
    enemyDeathDiv.attr("class", "enemy-death");
    enemyDeathImage = $("<img>");
    enemyDeathImage.attr(
      "class",
      "player" +
        enemySelect +
        "-death death enemy active" +
        enemy[enemySelect].name +
        "_death"
    );
    enemyDeathImage.attr("src", enemy[enemySelect].image_death);
    enemyDeathImage.attr("style", "min-height:300.6px;");

    enemyDeathDiv.append(enemyDeathImage);
    enemyVisibleDiv.append(enemyDeathDiv);
    $(".player-attack").hide();
    $(".player-death").hide();
    $(".heal").hide();
    $(".enemy-attack").hide();
    $(".enemy-death").hide();
    enemyDefense = enemy[enemySelect].defense;
    enemyHealth = enemy[enemySelect].health;
    enemyStrength = enemy[enemySelect].strength;
  });
  $(document).on("click", "#action-btn", function () {
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
});

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

function enemyDeath(){
  $(".enemy-death").show();
  $(".enemy-idle").hide();

  setTimeout(enemyDeathAnimation, 1200);
}

function enemyDeathAnimation() {
  $(".enemy-idle").hide();
  $(".enemy-death").hide();
};

function deathTimer(){

}

deathTimer(enemySelect)