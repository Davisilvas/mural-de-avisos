// let title = window.document.getElementById("title");
// let description = window.document.getElementById("description");


// // tMural = titulo do dMural
// // dMural = descrição do mural

// let tMural = window.document.getElementById("titleMural");
// let dMural = window.document.getElementById("descriptionMural");

// tMural = title.innerHTML


function carregado(){
    let titulo = localStorage.getItem("title");
    let descricao = localStorage.getItem("description");

    let title = document.getElementById("title");
    let description = document.getElementById("description");

    // title.innerHTML = titulo;
    // description.innerHTML = descricao
}

function attTilte(element){
    let valor = element.value;
    console.log(valor);

    let titulo = localStorage.getItem("titleMural");
    titulo.innerHTML = valor;

    localStorage.setItem("titleMural", valor);
}