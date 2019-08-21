$(window).on("load", function () {
  console.log($(this).attr("value"));
  enemySelect = 0;
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
  });
});
