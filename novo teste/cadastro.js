var formformulario= document.getElementById('formformulario');
var usuarios= [];

formformulario.addEventListener('submit',function(e){
    e.preventDefault();

    var nome= document.getElementById("nome").value;
    var data= document.getElementById("data").value;
    var cep= document.getElementById("cep").value;
    var rua= document.getElementById("rua").value;
    var cidade= document.getElementById("cidade").value;
    var estado= document.getElementById("estado").value;
    var sexo= document.getElementsByName("sexo");
    var filho= document.getElementById("filho").checked;
    var escolaridade= document.getElementById("escolaridade");
    var hobies= document.getElementById("hobies");

    var usuario= {
        nome:nome,
        data:data,
        cep:cep,
        rua:rua,
        cidade:cidade,
        estado:estado,
        sexo:sexo,
        filho:filho == true ? "Sim" : "Não", 
        escolaridade:escolaridade,
        hobies:hobies
    }
    usuarios.push(usuario);
    listacontatos();
});
function listacontatos(){
    var contatos= document.getElementById("contatos");
    contatos.innerHTML='';

    for(const item of usuarios){
        contatos.insertAdjacentHTML('beforeend', '<tr><td>' + item.nome + '</td><td>' + item.sexo + '</td><td>' + data + '</td><td>' + item.cep+ '</td><td>' + item.rua + '</td><td>' + item.cidade + '</td><td>' + item.estado+ '</td><td>' + item.filho + '</td><td>' + item.escolaridade + '</td><td>')
        
    }

}