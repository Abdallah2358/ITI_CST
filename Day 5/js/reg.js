import { setCookie } from './lib.js';
var date = new Date();
date.setDate(date.getDate() + 1);
function handleForm(e) {
    var formInp = e.target.getElementsByTagName('input');
    for (var inp of formInp) {
        setCookie(inp.name, inp.value, date);
    }
}

document.getElementById('reg').addEventListener('submit', handleForm)
setCookie(key, val, date);