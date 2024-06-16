const key = "ab6c45746847048035de4ca395d2fc67";

function colocarDadosNaTela(dados){
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".time").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".forecast-text").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
    console.log(dados)
}

async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}
   


function cliqueNoBotao(){
    const cidade = document.querySelector(".input-city").value 

    buscarCidade(cidade)
}