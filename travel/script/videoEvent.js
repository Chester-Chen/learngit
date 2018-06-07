// video的开始控制
var videoIs = document.getElementById("videoTouch");
videoIs.onclick = function () {
    if (videoIs.paused) {
        videoIs.play();
    } else {
        videoIs.pause();
    }
}
