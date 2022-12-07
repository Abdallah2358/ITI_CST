var url = window.location.href
console.log("url", url);
var qStr = url.split('?')[1]

var pramArr = []

for (const pram of qStr.split('&')) {

    var key = pram.split('=')[0];

    var val = decodeURIComponent(pram.split('=')[1]).split('+').join(' ');
    
    pramArr[key] = val
}



document.getElementById('wel').innerText = "Welcome, " + pramArr['name']

for (const key in pramArr) {
    if (key == 'name' || key == 'psw') {
        continue;
    }
    const element = pramArr[key];
    //console.log(key, document.getElementById(key));
    document.getElementById(key).innerText = element;
}