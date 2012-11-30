$(document).ready(function() {
    var jqXHR1 = $.ajax( {
        url: "https://api.github.com/orgs/workplacesystems/members",
        dataType: "json"
        }).done(function (result) {
            $.each(result, function (index, item) {
                var jqXHR2 = $.ajax( {
                    url: "https://api.github.com/users/" + item.login + "/gists",
                    dataType: "json",
                    async: false
                    //context: { firstResult: item }
                    }).done(function (secondResult) {
                        item.gists = secondResult;
                    }).fail(function(err, status) {
                        alert('Error getting Gists!');
                    });    
            });
            var htmlStr = '<ul data-role="listview" data-theme="b" data-dividertheme="a" data-inset="false" class="users">';
            $.each(result, function(index, item) {
                htmlStr += '<li>' + item.login + '</li><ul data-role="listview" data-inset="true" data-theme="d" data-dividertheme="a" class="gists">';
                $.each(item.gists, function(index, gist) {
                    htmlStr+= '<li><a href="' + gist.html_url + '" target="_blank">' + gist.description + '</a></li>';
                });
                htmlStr += '</ul>';
            });
            htmlStr += '</ul>';            
            $('.result').html(htmlStr);
        }).fail(function(err, status) {
            alert('Error getting Users!');
        });                
});
