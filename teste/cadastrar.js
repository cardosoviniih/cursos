var formformulario= document.getElementById('formformulario');
var usuarios=[];


formformulario.addEventListener('submit',function(e){
    e.preventDefault();
    
    var nome= document.getElementById('nome').value ;
     
    var usuario={
        nome:nome,
    }
    usuarios.push(usuario);
    listarcontatos();

});
function listarcontatos(){
 var contatos= document.getElementById('contatos');
 contatos.innerHTML='';
     
    for(const item of usuarios){

    contatos.insertAdjacentHTML('beforeend','<tr><td>'+ item.nome +'</td></tr>') 
    }
}