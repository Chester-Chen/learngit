function showPic (whichPic) {
    var source = whichPic.getAttribute("href");
    var placeHolder = document.getElementById("placeholder");
    placeHolder.setAttribute("src", source);
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function prepareGallery() {
    if (!document.getElementById || !document.getElementsByTagName) return false;
    if (!document.getElementById("imageGallery")) return false;
    var gallery = getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showPic(this);
            return false;
        }
    }
}

function addLoadEvent (func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);