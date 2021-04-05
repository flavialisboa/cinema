function nomeFilme(){
    var selecao = document.querySelector("#selecaoFilmes");
    var opcao = selecao.children[selecao.selectedIndex];
    var filme = opcao.textContent;

    return filme;
}

function valorIngressos(){
    var entradasInteiras = document.querySelector("#numeroEntradasInteiras");
    var quantidadeInteiras = entradasInteiras.children[entradasInteiras.selectedIndex];
    var quantidadeEntradasInteiras = quantidadeInteiras.textContent;

    var entradasMeias = document.querySelector("#numeroEntradasMeias");
    var quantidadeMeias = entradasMeias.children[entradasMeias.selectedIndex];
    var quantidadeEntradasMeias = quantidadeMeias.textContent;

    var valorInteiras = 20;
    var valorMeias = 10;

    var valorTotal = quantidadeEntradasInteiras * valorInteiras + quantidadeEntradasMeias * valorMeias;

    return Number(valorTotal);
}

function horarioEscolhido(){
    var horario = document.querySelector('input[name="ckHorario"]:checked').value;

    return horario;
}

function escolheAssento(){
    //  var divCadeiras = document.querySelector('#div_cadeiras');
      //divCadeiras.addEventListener('click', () => {
        var cadeira = document.getElementsByName('ckAssento');
          
        assentosEscolhidos = [];

        cadeira.forEach(elemento => {
            if(elemento.checked){
                assentosEscolhidos.push(elemento.value);
            } 
        });
}
 
function comprar() {
    var filme = nomeFilme();
    var valorTotal = valorIngressos();
    var horario = horarioEscolhido();
    var elem_msg = document.getElementById("div_msg");
        
    escolheAssento(); 

    if(valorTotal == 0){
        alert("Selecione a quantidade de ingressos!")
    } else {
        alert("Compra realizada!");
        elem_msg.innerHTML = "Resumo do pedido:<br><br>Você selecionou o filme:<br>" + filme + " no horário de " + horario + ", no valor de R$ " + valorTotal + ",00. <br>Seus assentos são:<br>" + assentosEscolhidos;
    }
}

var assentosEscolhidos = [];

/*cadeira.forEach(elemento => {
            if(elemento.checked){
                assentosEscolhidos.push(elemento.value);
            } 
        });
    });

    for (var i = 0; i < cadeira.length; i++) {
        if (cadeira[i].checked) assentosEscolhidos.push(cadeira[i].value);
    }*/