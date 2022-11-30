var array = []
var opArr = [0,1,1]
for (var i = 1; i <= 3; i++) {
    do {
        var temp = prompt("please enter #" + i);

    } while ((/\D/.test(temp)));
    array[i - 1] = parseInt(temp);
    opArr[0] += array[i - 1];
    opArr[1] *= array[i - 1];
    opArr[2] /= array[i - 1];
}


document.write('<h1><span style="color : ' + 'red' + ' ">Sum of 3 Numbers =</span> ' + array.join(' + ') + ' = ' + opArr[0] + ' </h1>')
document.write('<h1><span style="color : ' + 'red' + ' ">Sum of 3 Numbers =</span> ' + array.join(' * ') + ' = ' + opArr[1] + ' </h1>')
document.write('<h1><span style="color : ' + 'red' + ' ">Sum of 3 Numbers =</span> ' + array.join(' ÷ ') + ' = ' + opArr[2] + ' </h1>')


