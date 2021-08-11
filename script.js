function Writable(msg){
    ArrayPalavras = msg.textContent.split('');
    msg.textContent = '';
    msg.removeAttribute('initial-conteiner-apresentation-content-none')
    msg.setAttribute('class' ,'initial-conteiner-apresentation-content-block')

    ArrayPalavras.forEach((palavra, index) => {
        setTimeout(function(){
            console.log(palavra, index)
            msg.textContent += palavra;
        }, 65 * index);
    });
}


window.onload = setTimeout(function(){
    const mensagem = document.querySelector('#initial-conteiner-apresentation-content');
    Writable(mensagem);
}, 2000)
