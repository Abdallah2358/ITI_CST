const regex = new RegExp('foo*');
function handleChange(e) {
    var mytext = document.getElementById('mytext');
    var name = e.target.name;
    var id = e.target.id

    if (id.endsWith('none')) {
        id = 'none'
    }
    if (id.endsWith('normal')) {
        id = 'normal'
    }
    console.log(mytext.style[name] = id);
}
onload = function () {

    var inputs = document.getElementsByTagName('input');
    for (var inp of inputs) {
        inp.addEventListener('change', handleChange)
    }

}
