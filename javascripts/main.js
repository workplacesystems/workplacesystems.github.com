$(function() {

  var members = {}
  , gists = {}
  , teams = {};

//  $.ajax({
//    url: "https://api.github.com/orgs/workplacesystems/public_members",
//    context: document.body
//  }).done(function(data) { 
//    //$(this).addClass("done");
//    console.log(data);
//  });
  
  
  var jqxhr = $.ajax( "https://api.github.com/orgs/workplacesystems/members" )
    .done(function() { alert("success"); })
    .fail(function() { alert("error"); })
    .always(function() { alert("complete"); });


});




