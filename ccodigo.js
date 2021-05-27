var selecionar = document.querySelector('select');

selecionar.addEventListener('change', function (evento) {
    var container = document.getElementById('container');

    if (evento.target.value == 'opcao1'){
        container.style = 'display: block';
    }

    else{
        container.style = 'display: none';
    }
});

var radios = document.querySelectorAll('input[name="opcoes"]');

radios.forEach(radio => {
radio.addEventListener('change', function (evento) {
    var botao = document.querySelector('button');

    if (evento.target.value == 'codificar'){
        botao.innerHTML = 'Codificar Mensagem.';
    }

    else{
        botao.innerHTML = 'Decodificar Mensagem.';
    }
})});

var formulario = document.forms.formulario;

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var mensagem = formulario.mensagem.value;
    var selecionar = formulario.selecionar.value;
    var incremento = formulario.incremento.value;
    var radios = formulario.opcoes.value;
    var resultado = '';

    if (selecionar == 'opcao1'){
        resultado = opcao1(radios, mensagem, incremento);
    }

    else{
        resultado = opcao2(radios, mensagem);
    }

    var resultadoMensagem = document.getElementById('resultado');
    resultadoMensagem.innerHTML = `<h4> </h4> ${resultado}`;

    formulario.reset();
});

function opcao2(opcoes, mensagem){
    if(opcoes == 'codificar'){
        return btoa(mensagem);
    }

    else{
        return atob(mensagem);
    }
}

function opcao1(opcoes, mensagem, incremento){
    incremento = Number(incremento);

    var resultado = '';

    for (var i = 0; i < mensagem.length; i++) {
        var letra = mensagem[i];
        var codigo = letra.charCodeAt();

        if (opcoes == 'codificar') {
            codigo += incremento;
        }

        else{
            codigo -= incremento;
        }

        resultado += String.fromCharCode(codigo);
    }

    return resultado;
}