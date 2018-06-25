window.onscroll = function () {
    var topDist = this.document.documentElement.scrollTop || this.document.body.scrollTop;
    if (topDist > 300) {
        // var hidd = document.getElementById("top");
        // hidd.style.display = "none";
        document.getElementById("top").style.display = "inline";
    } else {
        document.getElementById("top").style.display = "none";
    }
}