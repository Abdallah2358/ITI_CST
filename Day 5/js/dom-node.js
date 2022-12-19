onload = function () {

    var img = document.getElementsByTagName('img')[0]
    img.style.marginLeft = 'auto'
    img.style.display = 'block'

    let newImg = document.createElement("img")
    newImg.src = img.src;

    var ul = document.getElementById('nav')
    ul.style.listStyle = 'circle';

    var div = document.getElementsByClassName('center')[0]
    div.style.display = 'flex'
    div.style.height = '100vh'
    div.style.flexDirection = 'column'
    div.style.justifyContent = 'space-between'

    div.append(newImg)
    newImg.style.marginRight = "auto";
    newImg.style.display = 'block'
}