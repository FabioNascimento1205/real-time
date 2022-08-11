const relogio = setInterval(function time(){

    const hora = document.querySelector('span#hora')
    const min = document.querySelector('span#minutos')
    const seg = document.querySelector('span#segundos')
    const img = document.getElementById('imagem')
    const msg = document.getElementById('saudacao')

    let dateDay = new Date()
    let hr = dateDay.getHours()
    let mn = dateDay.getMinutes()
    let sg = dateDay.getSeconds()

    /* condição para os zeros aparecer no relogio */

    if(hr <10) hr = '0' + hr
    if(mn <10) mn = '0' + mn
    if(sg <10) sg = '0' + sg

    /* Evento utilizada para fazer o relogio funcionar */
    hora.textContent = hr
    min.textContent = mn
    seg.textContent = sg

    if(hr >=5 && hr <12){
        msg.innerHTML = 'BOM DIA'
        img.src = './img/manha.png'
    }else if(hr >=12 && hr <18){
        msg.innerHTML = 'BOA TARDE'
        img.src = './img/tarde.png'
    }else{
        msg.innerHTML = 'BOA NOITE'
        img.src = './img/noite.png'
    }

})