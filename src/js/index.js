//Passo1: Pegar no JS o elemento html que corresponde ao botao de alterar tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");//vai buscar um elemento especificado, dentro das aspas duplas, no html

//Passo 2 : Pegar no JS o elemento HTML que corresponde ao body
const body = document.querySelector("body");//vai co nsultar um seletor, que pode ser uma classe, uma tag etc

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

//Passo 3: Identificar o clique do usuário no botão de alterar tema
botaoAlterarTema.addEventListener("click", () => {
  console.log("clicou no botão");  

  //Passo 4:Verificar se a classe modo-escuro ja existe
const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");//O constains vai retornar true ou false para o caso de existir essa classe

//Existe uma forma de refatorar o código diminuindo as linhas de codigo que removem e add o modo-escuro, usando o seguinte comando: blody.classList.toggle("modo-escuro"); ele fará exatamente o que as duas linhas estao fazendo


if(modoEscuroEstaAtivo) {
//Remover a classe modo-escuro
body.classList.remove("modo-escuro");

//Passo 6: Alterar a imagem do botão de sol, para a lua
imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")//Como queremos mudar o atributo src do sol para a lua, usamos o setAttribute, pois assim, quando o cliente clicar no sol para mudar para o modo escuro, aparecerá a lua no lugar do sol

} else{
 //Passo 5: Adicionar a classe modo escuro no body
 body.classList.add("modo-escuro"); //basicamente retorna a lista das classes que tem nesse elemento

//Passo 6: Alterar a imagem do botão de sol, para a lua
imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")//Como queremos mudar o atributo src do sol para a lua, usamos o setAttribute, pois assim, quando o cliente clicar no sol para mudar para o modo escuro, aparecerá a lua no lugar do sol

}
});


