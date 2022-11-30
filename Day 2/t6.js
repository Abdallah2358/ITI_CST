var array = []
for (var i = 1; i <= 5; i++) {
    do {
        var temp = prompt("please enter #" + i);
    } while ((/\D/.test(temp)));
    array[i - 1] = parseInt(temp);
}


document.write('<h1><span style="color : ' + 'red' + ' ">Values entered</span> ' + array.join(' , ') + '</h1>')
array.sort(function (a, b) { return b - a })
document.write('<h1><span style="color : ' + 'red' + ' ">Values sorted dec</span> ' + array.join(' , ') + '</h1>')
array.sort(function (a, b) { return a - b })
document.write('<h1><span style="color : ' + 'red' + ' ">Values sorted acs</span> ' + array.join(' , ') + '</h1>')