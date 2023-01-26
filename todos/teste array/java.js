var frutas = ["abacate","abacaxi","manga","figo","laranja","uva"];

console.log(frutas);

//contar a quantidade de itens no array

document.getElementById("qnt-itens").innerHTML = "<p>"+ frutas.length + "</p>";

//acessar primeiro item do array

document.getElementById("primeiro-item").innerHTML = "<p>"+ frutas[0] + "</p>";

//acessar o terceiro item do array

document.getElementById("terceiro-item").innerHTML = "<p>"+ frutas[2] + "</p>";

//acessar ultimo item do array   ultimo=item

document.getElementById("ultimo-item").innerHTML = "<p>"+ frutas[frutas.length -1]+ "</p>";

//acicionar mais um item no array

frutas.push("pera");

console.log(frutas);

//adicionar um item no inicio do array

frutas.unshift("kiwi");
 
console.log(frutas);

//remover um item do final do array
frutas.pop();

console.log(frutas);

//remover no inicio do array
frutas.shift();     

console.log(frutas);

//remover  um item  pela  posiçao do indice
//frutas.splice(pos, n);
// a partir da posiçao(pos) em direçao ao fim da array
//(n)define  o numero de itens a se remover

frutas.splice(2,3);

console.log(frutas);

//ler o um array
frutas.forEach(function(item,indice){
    //console.log(item,indice);
document.getElementById("listar-frutas").insertAdjacentHTML('beforeend',indice + " - " + item + "<br>");
});
