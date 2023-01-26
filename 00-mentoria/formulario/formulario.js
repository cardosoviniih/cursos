// Comportamento da página

// 1. Cadastrar convidado
var formCadastrar = document.getElementById("formCadastrar");
var meusConvidados = [];

formCadastrar.addEventListener('submit', function(evento){
    console.log(evento);
    evento.preventDefault();

    //Pegar informações da tela (OK)
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;

    console.log('Informações do formulário');
    console.log('nome', nome);
    console.log('idade', idade);

    // Guardar em uma lista (OK)
    var convidadoForm = { //objeto//
        nome: nome,
        idade: idade
    }

    meusConvidados.push(convidadoForm);
    
    listarConvidados();
});

// 2. Listar Convidados
function listarConvidados(){
    //console.log(meusConvidados);
    var convidados = document.getElementById("convidados");
    convidados.innerHTML = '';

   var estilo = 'neutro' 

    //Jeito 1
    var i = 0;
    for (const convidado of meusConvidados) {        

        if(convidado.idade < 10){
            estilo = 'proibido';
        } else if(convidado.idade < 18){
            estilo = 'neutro';
        } else {
            estilo = 'permitido';
        }

        convidados.insertAdjacentHTML("beforeend",'<tr class="' + estilo + '"><td>' + convidado.nome + '</td><td>' + convidado.idade + '</td><td><button onclick="deletar(' + i + ')">Deletar</button></tr>');    
        i++;
    }

    // Jeito 2
    // for (var index = 0; index < meusConvidados.length; index++) {
    //     var convidado = meusConvidados[index];
    //     convidados.insertAdjacentHTML("beforeend",'<tr><td>' + convidado.nome + '</td><td>' + convidado.idade + '</td><td><button onclick="deletar(' + index + ')">Deletar</button></tr>');    
    // }
    
    // Jeito 3    
    // meusConvidados.forEach(function(convidado, indice){
    //     convidados.insertAdjacentHTML("beforeend",'<tr><td>' + convidado.nome + '</td><td>' + convidado.idade + '</td><td><button onclick="deletar(' + indice + ')">Deletar</button></tr>');        
    // })    

    // Jeito 4
    // var i = 0;
    // while(i < meusConvidados.length){
    //     var convidado = meusConvidados[i];
    //     convidados.insertAdjacentHTML("beforeend",'<tr><td>' + convidado.nome + '</td><td>' + convidado.idade + '</td><td><button onclick="deletar(' + i + ')">Deletar</button></tr>');    
    //     i++;
    // }
}
// 3. Excluir convidados
function deletar(index){
    console.log('deseja deletar o index: ', index);
    meusConvidados.splice(index, 1);
    listarConvidados();

}
