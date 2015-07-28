(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    FB.init({
        appId: '822521834509631',
        xfbml: true,
        version: 'v2.4'
    });
};



$(document).ready(function() {
    console.log(document.URL);
    $(".fb").click(function() {
        FB.ui({
            method: 'share',
            href: document.URL,
        }, function(response) {});
    });


});