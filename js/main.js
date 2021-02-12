/*var nome = "Isael Sobral";
var idade = 24;
var idade2 =2;
var sucesso ="O segredo do sucesso é a continuidade";
//alert(nome+" tem "+idade+" anos");
//alert(idade + idade2);
console.log(idade*idade2);
console.log(nome);
console.log(sucesso);
console.log(sucesso.replace("sucesso","modelo"));
console.log(sucesso.toUpperCase());
console.log(sucesso.toLowerCase())*/
/*var lista=["banana","aipim","batata-doce"];
lista.push("cuzcuz", "açucar");//add elementos
lista.pop();//tira ultimo elemento
lista.reverse();//exibe elementos da lista ao contrário
console.log(lista);
console.log(lista.length);//retorna o tamanho da lista
console.log(lista.toString());//converte em string
console.log(lista.join("__"));//add caract. entre os elementos


var isael={bebida:"café", comida:"cuzcuz"}//dicionário é como se fosse um objeto
console.log(isael.bebida+" "+isael.comida);
var listadicionario =[{fruta:"maçã", cor:"red"},{fruta:"goiaba", cor:"yellow"}];
console.log(listadicionario);//lista de dicionarios
console.log(listadicionario[0].cor);
console.log(listadicionario[0].fruta);
console.log(listadicionario[1].fruta);
console.log(listadicionario[1].cor);*/

/*var idade = prompt("Idade?");//ele faz uma pergnta, aq eu armazenei a resposta na var idade
if (idade<20){
    alert("Small");
}else{
    alert("Big");
};
var count=0;
while(count<=4){
    console.log(count);
    count++;
};
var i;
for(i=0;i<=6;i++){
    alert(i);
};*/
/*Datas: armazenando data atual*/
/*var dt = new Date();
alert(dt);
alert("Mês: "+(dt.getMonth()+1));
alert("A data de hoje é: "+dt.getDate());
alert("Ano: "+dt.getFullYear());
alert("Horas: "+ dt.getHours());
alert("Minutos: "+dt.getMinutes());
alert("Segundos: "+dt.getSeconds());
alert("Milissegunos: "+ dt.getMilliseconds());*/

//Funções
/*function multi(n1,n2,n3){
    return n1*n2*n3;
}
alert(multi(2,2,2));
function trocaNome(frase, nome,novo_nome){
    return frase.replace(nome,novo_nome);

}
alert(trocaNome("A vida é bela", "bela", "linda"));

var validar=0;
function valida(idade){
    if (idade>=18){
        validar=true; 
    }else{
        validar = false;
    }
return validar;
}
var idade=prompt("idade:");
valida(idade);
alert(validar);*/
function clicado(){
    alert("Obrigado. Tu me salvaste!");

}
function thx(){
    document.getElementById("obg").innerHTML = "Gracias";
    /*vai pegar o elemento do doc html com id "obg" e injetar coisas de html pelo metodo innerhtml*/
}
function redirecionar(){
    window.open("https://origamid.com");
    //enviar para uma página na web em outra janela
    window.location.href="https://google.com";
    //abre na mesma aba
}
function load(){
    alert("Seja muito Bem-Vindo!");
}
function funcaoTroca(elemento){
    alert(elemento.value);//pega e exibe pelo alert o valor do elemento select do html
}