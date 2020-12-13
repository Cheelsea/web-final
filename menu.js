function gotoHome() {
    window.location.href="main.html";
}

function gotoDelicious() {
    window.location.href="delicious.html";
}

function gotoAmusing() {
    window.location.href="amusing.html";
}

function gotoContact() {
    window.location.href="contact.html";
}

var timer;

function hideMenu() {
    var menuContentDom = document.getElementById("menuContent");
    timer=setTimeout(function(){
        menuContentDom.style.width = '0px';
        menuContentDom.classList.add('content-hide')
        menuContentDom.classList.remove('content-show')
    },300);
    
}

function showMenu() {
    clearTimeout(timer);   
    var menuContentDom = document.getElementById("menuContent");
    menuContentDom.style.width = '150px';
    menuContentDom.classList.add('content-show')
    menuContentDom.classList.remove('content-hide')
}