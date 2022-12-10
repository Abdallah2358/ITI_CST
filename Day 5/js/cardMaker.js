function handleCardGeneration(e) {
    var sel = document.querySelector("input[type='radio'][name='img']:checked")
    var txt = document.getElementById('txt')
    if (sel) {
        document.getElementById('warn').innerText = "";
        var op = open('', '_blank', 'name=popup')
        var img = document.getElementById('i' + sel.id);

        var newi = document.createElement('img');
        newi.src = img.src
        newi.style.margin = '5px';
        newi.style.width = '500px'


        var mes = document.createElement('h1');
        mes.innerText = txt.value;
        mes.style.margin = '5px'

        var closeBtn = document.createElement('button')
        closeBtn.id = 'close';
        closeBtn.style.margin = 'auto'
        closeBtn.innerText = "Close Window"
        closeBtn.addEventListener('click', function (params) {
            op.close();
        })
        op.document.body.style.textAlign = 'center';
        op.document.body.append(newi);
        op.document.body.append(mes);
        op.document.body.append(closeBtn)
    }
    else {
        document.getElementById('warn').innerText = "Please select a card";
    }
}
onload = function () {
    this.document.getElementById('gen').onclick = handleCardGeneration
}
