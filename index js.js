const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Sure!",
  "I'm not sure.",
  "It is decidedly so.",
  "Do not count on it.",
  "No doubt!",
  "Ask again later.",
  "Yes, definitely!",
  "My answer is no",
  "You can count on it.",
  "Better not tell you now.",
  "In my opinion, yes.",
  "My sources say no.",
  "Probably.",
  "It is not possible to predict now.",
  "Good prospects.",
  "The prospects are not so good.",
  "Yes.",
  "Focus and ask again.",
  "Signs point to yes.",
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Ask your question")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}