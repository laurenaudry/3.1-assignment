document.addEventListener("DOMContentLoaded", function() {

  var request = new XMLHttpRequest();
  var requestRepos = new XMLHttpRequest();

  var name = document.querySelector(".login")
  var blog = document.querySelector(".blog")
  var location = document.querySelector(".location")
  var email = document.querySelector(".email")
  var avatar = document.querySelector(".avatar_url")
  var html = document.querySelector(".html_url")
  var repos = document.querySelector(".repositories")

  request.addEventListener('load', function(e){
      var responseJSON  = JSON.parse(e.target.response);

      var listHTML = "";
          responseJSON.users.forEach(function(result){
            listHTML += "<li>";
            listHTML += "<h3> " + result.repos  + "</h3>";
            listHTML += "</li>";
          });

  request.open("GET", "https://api.github.com/users/laurenaudry")
  request.open("GET", "https://api.github.com/users/laurenaudry/repos")
  request.send(null);
  });
});
