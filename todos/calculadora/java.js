var body = document.body;

body.addEventListener('keyup', function(e){               
    switch(e.key){
        case "1":
        case "2":
        case "9":
        case "*":
            insert(e.key);    
            break;
        default:
            console.log('Faz nada');
            break;
    }
});

function insert(num)
{
 var numero= document.getElementById('resultado').innerHTML;
 document.getElementById('resultado').innerHTML=numero+num;
}

function clean()
{
    document.getElementById('resultado').innerHTML= "";

}

function back()
{
    var resultado= document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=resultado.substring(0,resultado.length-1)
}

function calcular()
{
    try {    
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado)
        {
            document.getElementById('resultado').innerHTML= eval (resultado);
        }
        else
        {
            document.getElementById('resultado').innerHTML= "nada..."
        }
    } catch (error) {
        alert('Utilize apenas os botões da calculadora');
    }
}

