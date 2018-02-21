function showPic (whichPic) {
    var source = whichPic.getAttribute("href");
    var placeHolder = document.getElementById("placeholder");
    placeHolder.setAttribute("src", source);
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function popUp (winUrl) {
    window.open("winUrl", "popup", "width=320, height=480");
}