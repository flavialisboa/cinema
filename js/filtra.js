var campoFiltro = document.querySelector("#filtrar-filmes");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var filmes = document.querySelectorAll(".filme-escolha");

    if(this.value.length > 0){
        for(var i = 0; i < filmes.length; i++){
            var filme = filmes[i];
            var pNome = filme.querySelector(".titulo-filmes");
            var nomeFilme = pNome.textContent;
            var expressaoRegular = new RegExp(this.value, "i");
            
            if(!expressaoRegular.test(nomeFilme)){
                filme.classList.add("invisivel");
            }else{
                filme.classList.remove("invisivel");
            }
        }
    }else{
        for(var i=0; filmes.length; i++){
            var filme = filmes[i];
            filme.classList.remove("invisivel");
        }
    }
});