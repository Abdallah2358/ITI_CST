var url = window.location.href
var qStr = url.split('?')[1]
var pramArr = []
for (const pram of qStr.split('&')) {
    var key = pram.split('=')[0];
    var val = pram.split('=')[1];
    pramArr[key] = val
}

for (const key in pramArr) {
    if (Object.hasOwnProperty.call(pramArr, key)) {
        const element = pramArr[key];
        console.log(element);
    }
}
document.getElementById('wel').innerText = "Welcome, " + pramArr['name'] 