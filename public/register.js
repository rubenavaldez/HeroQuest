$(function() {
    $("#form-register").on("submit", function(e) {
      e.preventDefault();
  
      const first_name = $("#input-first-name")
        .val()
        .trim();
      const last_name = $("#input-last-name")
        .val()
        .trim();
      const email = $("#input-email")
        .val()
        .trim();
      const password = $("#input-password")
        .val()
        .trim();
  
      if (
        !email ||
        !password ||
        !first_name ||
        !last_name
      ) {
        console.log("Please fill in all fields."); 
        // TODO: replace with onscreen error
      } else {
        $.post("/register", {
          first_name,
          last_name,
          email,
          password,
        })
          .done(function(data, status, jqXHR) {
            window.location = "/index";
          })
          .fail(function(jqXHR, status, error) {
            console.log(JSON.parse(jqXHR.responseText).error); 
            // TODO: replace with onscreen error
          });
      }
    });
  });
  