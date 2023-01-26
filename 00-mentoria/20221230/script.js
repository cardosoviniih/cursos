

console.log("Carregando script");
var usuarios = [];

// Igredientes
// 1. Evento Submit do Formulário
var formContrato = document.getElementById("formContrato");

formContrato.addEventListener("submit", function(e){
    e.preventDefault();

    // 2. Campos do formulário
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var idade =  document.getElementById("idade").value;
    var nomedamãe = document.getElementById("nomedamãe").value;

    var usuario = {
        nome: nomeCompleto,
        idade: idade,
        nomedamãe: nomedamãe
    }

    usuarios.push(usuario);

    //console.log(usuarios);

    exibirContratos();
})

// 3. Tbody (Listar)
function exibirContratos(){

    //tbody
    var contratos = document.getElementById('contratos');

    for (const item of usuarios) {
        contratos.insertAdjacentHTML('beforeend', '<tr><td>' + item.nome + '</td><td>' + item.idade + '</td><td>' + item.nomedamãe + '</td></tr>')
        console.log(item.idade);
    }
    
}