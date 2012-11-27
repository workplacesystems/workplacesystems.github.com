$(function() {

  var members = {}
  , gists = {}
  , teams = {};

//  var jqxhr = $.ajax({
//    url: "https://api.github.com/orgs/workplacesystems/members",
//    dataType: "json"
//    context: document.body
//  }).done(function(data) { 
    //$(this).addClass("done");
//    console.log(data);
//  }).fail(function() {
//    console.log('error');
//  });
  
  
//  var jqxhr = $.ajax( "https://api.github.com/orgs/workplacesystems/members" )
//    .done(function() { alert("success"); })
//    .fail(function() { alert("error"); })
//    .always(function() { alert("complete"); });


/*
$.ajax({
  url: 'https://api.github.com/orgs/workplacesystems/members',
  success: function(data) {
    console.log(data);
    alert('Load was performed.');
  },
  error: function(err, status) {
    console.log(err, status);
  }
});
*/

$.ajax({
  //  url: "https://api.github.com/repos/VonC/gitolite/git/refs/tags",
    url: "https://api.github.com/orgs/workplacesystems/members",
    dataType: "json",
    success: function (returndata)
    {
      
      //  $("#result").html(returndata[0]["object"]["sha"]);
        alert('Load was performed.');
    }  
});


});




