$(function() {

  var members = {}
  , gists = {}
  , teams = {};

  $.ajax({
    url: "https://api.github.com/orgs/workplacesystems/public_members",
    //context: document.body
  }).done(function(data) { 
    //$(this).addClass("done");
    console.log(data);
  });

});




