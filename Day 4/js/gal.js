var img = document.getElementById('img')
var start = 2;
var timerId;
function newSource(n) {
    img.src = "images/" + n + ".jpg"
}

function next() {
    if (start < 7) {
        newSource(start++)
    }
}
function prev() {
    if (start > 1) {
        start--;
        newSource(start)
    }
}
function ss() {
    timerId = setInterval(function () {
        if (start == 7) {
            start = 1;
            next()
        } else {
            next()
        }
    }, 1000)
}
function stop() {
    clearInterval(timerId);
}