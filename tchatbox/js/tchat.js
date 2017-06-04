var url="tchatAjax.php";
var lastid=0;
var timer = setInterval(getMessages, 100);
var timerAbs = setTimeout(absence, 120000);
$(function(){
    $("#tchatForm form").submit(function(data){
        clearInterval(timer);
        clearTimeout(timerAbs);
        showLoader("#tchatForm");
        var message = $("#tchatForm form textarea").val();
        $.post(url, {action: "addMessage", message: message}, function(data){
            if(data.erreur == "ok") {
                getMessages();
                $("#tchatForm form textarea").val("");
            }
            else {
                alert(data.erreur);
            }
            timerAbs = setTimeout(absence, 120000);
            timer = setInterval(getMessages, 100);
            hideLoader();
        }, "json");
        return false;
    })
});

function getMessages(){
        $.post(url, {action: "getMessages", lastid: lastid}, function(data){
            if(data.erreur == "ok") {
                $("#tchat").append(data.result);
                lastid = data.lastid;
            }
            else {
                alert(data.erreur);
            }
            hideLoader();
        }, "json");
        return false;
}

function absence(){
    clearInterval(timer);
    clearTimeout(timerAbs);
    $.post(url, {action: "addMessage", message: "est desormais absent"}, function(data){
            if(data.erreur == "ok") {
                getMessages();
            }
            else {
                alert(data.erreur);
            }
            timer = setInterval(getMessages, 100);
        }, "json");
        return false;
}

function showLoader(div) {
    
    $(div).append('<div class="loader"></div>');
    $(".loader").fadeTo(500,0.6);
}

function hideLoader() {
    $(".loader").fadeOut(500,function(){
        $(".loader").remove();
    });
}