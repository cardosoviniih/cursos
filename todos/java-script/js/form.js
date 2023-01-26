var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
event.preventDefault();

var form = document.querySelector("#form-adiciona");

//extraindo informações do paciente do form
var paciente = obtemPacienteDoFormulario(form);

//adiçao aqui
var erros = validaPaciente(paciente);

if (erros.length > 0) {
   exibeMensagensDeErro(erros);//aqui é o codigo de exibir erros.
    return;
}

adicionarPacienteNaTabela(paciente);



form.reset();
var mensagensErro= document.querySelector("#mensagens-erro");
mensagensErro.innerHTML="";

});

function adicionarPacienteNaTabela(paciente){
var pacienteTr = montaTr(paciente);
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.content = erro;
        ul.appendChild(li);
   });
    
}

function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value),
    }
    return paciente;
    
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}


function montaTd(dado,classe){
    var td =  document.createElement("td");
    td.textcontent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length==0) erros.push("o nome nao pode ser em branco");
    if(!validaPeso(paciente.peso)) erros.push("peso é invalido!");
    if(!validaAltura(paciente.altura))erros.push("altura é invalida!");
    if(paciente.gordura.length == 0) erros.push("A gordura nao pode ser em branco");
    if(paciente.peso.length == 0) erros.push("o peso nao pode ser branco");
    if(paciente.altura.length == 0) erros.push("a altura do paciente nao pode ser branco");

    return erros;
}

