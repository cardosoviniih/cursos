//Passo 3: cadastrar cada usuario//
var formcadastro= document.getElementById("formcadastro");
var usuarios= [];

//console.log('alert');
   
formcadastro.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Pegar informações da tela 
    var nome= document.getElementById("nome").value;
    var sexo= document.getElementsByName("sexo");    
    var data= document.getElementById("data").value;
    var cep= document.getElementById("cep").value;
    var rua= document.getElementById("rua").value;
    var cidade= document.getElementById("cidade").value;
    var estado= document.getElementById("estado").value;
    var filho= document.getElementById("filho").checked;
    var futebol = document.getElementById("futebol").checked;
    var basquete  = document.getElementById("basquete").checked;
    
    

    // Guardar  lista 
    var usuario= { 
        nome: nome,
        sexo: sexo,
        data: data,
        cep:  cep, 
        rua: rua,
        cidade: cidade,
        estado: estado,
        filho: filho == true ? "Sim" : "Não", 
        futebol: futebol,
        basquete: basquete

    }

    usuarios.push(usuario);
    
    listarcadastrados();

   //console.log('lista')
});

//listar cadastrados//
function listarcadastrados(){
   
    var cadastrados = document.getElementById("cadastrados");        

    for (const item of usuarios) {

        var hobbies = '';
        
        if(item.futebol == true){
            hobbies = hobbies + ' Futebol';
        }
        if(item.basquete == true){
            hobbies = hobbies + ' basquete';
        }

        cadastrados.insertAdjacentHTML('beforeend', '<tr><td>' + item.nome + '</td><td>' + item.sexo + '</td><td>' + data + '</td><td>' + item.cep+ '</td><td>' + item.rua + '</td><td>' + item.cidade + '</td><td>' + item.estado+ '</td><td>' + item.filho + '</td><td>' + item.escolaridade + '</td><td>' + hobbies + '</td></tr>')
        console.log(item.nome);
    }
     
}





//Passo 6: fazer botao de deletar//