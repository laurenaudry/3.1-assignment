document.addEventListener("DOMContentLoaded", function() {

  var request = new XMLHttpRequest();
  var requestRepos = new XMLHttpRequest();

  var name = document.querySelector(".name")
  var blog = document.querySelector(".blog")
  var location = document.querySelector(".location")
  var email = document.querySelector(".email")
  var avatar = document.querySelector(".avatar_url")
  var html = document.querySelector(".html_url")
  var repos = document.querySelector(".repositories")

  request.addEventListener('load', function(e){
      var responseJSON  = JSON.parse(e.target.response);
      name.textContent = responseJSON.name;
      blog.textContent = responseJSON.blog;
      location.textContent = responseJSON.location;
      email.textContent = responseJSON.email;
      avatar.src = responseJSON.avatar_url;
      html.url = responseJSON.html_url

    });
  requestRepos.addEventListener('load', function(e){
      var responseJSON  = JSON.parse(e.target.response);
      var listHTML = "";
      responseJSON.forEach(function(result){
        listHTML += "<li>";
        listHTML += "<h3> " + result.name  + "</h3>";
        listHTML += "</li>";
      });
      repos.innerHTML = listHTML;
  });


  request.open("GET", "https://api.github.com/users/laurenaudry")
  requestRepos.open("GET", "https://api.github.com/users/laurenaudry/repos")
  request.send(null);
});
