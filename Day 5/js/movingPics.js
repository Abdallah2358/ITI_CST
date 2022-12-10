onload = function () {
    var imgs = document.getElementsByTagName('img')
    updatePositionView(imgs)
    this.document.getElementById('start')
        .addEventListener('click', handleStart)
    this.document.getElementById('stop')
        .addEventListener('click', handleStop)
}
var timerID;
var move = 5;
var revs = false;
function handleStart(e) {
    clearInterval(timerID)
    timerID = setInterval(function () {
        var imgs = document.getElementsByTagName('img')
        imgs[0].style.left = (parseInt(imgs[0].style.left) - move) + 'px'
        imgs[1].style.left = (parseInt(imgs[1].style.left) + move) + 'px'
        imgs[2].style.top = (parseInt(imgs[2].style.top) - move) + 'px'
        updatePositionView(imgs)
        if (parseInt(imgs[1].style.left) == 550) {
            move = -5
        }
        if (parseInt(imgs[1].style.left) == 0) {
            move = 5
        }

    }, 50);

}
function handleStop(e) {
    clearInterval(timerID)
}

function updatePositionView(imgs) {
    var h1s = document.getElementsByTagName('h1')
    for (let i = 0; i < h1s.length; i++) {
        const spans = h1s[i].getElementsByTagName('span');
        spans[0].innerText = parseInt(imgs[i].style.left)
        spans[1].innerText = parseInt(imgs[i].style.top)
    }
}