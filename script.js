//Criação das Cartas

var cartaAhri = {
    img:
      "https://static.wikia.nocookie.net/leagueoflegends/images/e/e5/Ahri_OriginalLoading.jpg",
    nome: "Ahri",
    atributos: {
      vida: 514,
      mana: 334,
      ataque: 53,
      armadura: 20
    }
  };
  
  var cartaAlistar = {
    img:
      "https://static.wikia.nocookie.net/leagueoflegends/images/7/70/Alistar_OriginalLoading.jpg",
    nome: "Alistar",
    atributos: {
      vida: 613,
      mana: 278,
      ataque: 61,
      armadura: 24
    }
  };
  
  var cartaAnnie = {
    img:
      "https://static.wikia.nocookie.net/leagueoflegends/images/6/68/Annie_OriginalLoading.jpg",
    nome: "Annie",
    atributos: {
      vida: 511,
      mana: 334,
      ataque: 50,
      armadura: 19
    }
  };
  
  var cartaAshe = {
    img:
      "https://static.wikia.nocookie.net/leagueoflegends/images/c/c1/Ashe_OriginalLoading.jpg",
    nome: "Ashe",
    atributos: {
      vida: 527,
      mana: 280,
      ataque: 56,
      armadura: 21
    }
  };
  
  var cartaChogath = {
    img:
      "https://static.wikia.nocookie.net/leagueoflegends/images/6/69/Cho%27Gath_OriginalLoading.jpg",
    nome: "Cho'Gath",
    atributos: {
      vida: 574,
      mana: 272,
      ataque: 61,
      armadura: 28
    }
  };
  
  var cartaKindred = {
    img:
      "https://static.wikia.nocookie.net/leagueoflegends/images/1/18/Kindred_OriginalLoading.jpg",
    nome: "Kindred",
    atributos: {
      vida: 540,
      mana: 300,
      ataque: 49,
      armadura: 27
    }
  };
  
  var cartaMorgana = {
    img:
      "https://static.wikia.nocookie.net/leagueoflegends/images/4/46/Morgana_OriginalLoading.jpg",
    nome: "Morgana",
    atributos: {
      vida: 560,
      mana: 340,
      ataque: 56,
      armadura: 25
    }
  };
  
  var cartaOrianna = {
    img:
      "https://static.wikia.nocookie.net/leagueoflegends/images/9/90/Orianna_OriginalLoading.jpg",
    nome: "Orianna",
    atributos: {
      vida: 385,
      mana: 250,
      ataque: 44,
      armadura: 8
    }
  };
  
  var cartaThresh = {
    img:
      "https://static.wikia.nocookie.net/leagueoflegends/images/b/b5/Thresh_OriginalLoading.jpg",
    nome: "Thersh",
    atributos: {
      vida: 560,
      mana: 200,
      ataque: 46,
      armadura: 16
    }
  };
  
  var cartaZilean = {
    img:
      "https://static.wikia.nocookie.net/leagueoflegends/images/a/ad/Zilean_OriginalLoading.jpg",
    nome: "Zilean",
    atributos: {
      vida: 499,
      mana: 360,
      ataque: 51,
      armadura: 19
    }
  };
  
  var cartas = [
    cartaAhri,
    cartaAlistar,
    cartaAnnie,
    cartaAshe,
    cartaChogath,
    cartaKindred,
    cartaMorgana,
    cartaOrianna,
    cartaThresh,
    cartaZilean
  ];
  
  var cartaMaquina;
  var cartaJogador;
  
  var pontosJogador = 0;
  var pontosMaquina = 0;
  
  var jogador = document.querySelector("#jogador1");
  var maquina = document.querySelector("#jogador2");
  
  atualizaPlacar();
  atualizaQuantidadeDeCartas();
  
  function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById("quantidade-cartas");
    var html = `Quantidade de cartas no jogo: ${cartas.length}`;
    divQuantidadeCartas.innerHTML = html;
  }
  
  function atualizaPlacar() {
    var spanJogador = document.getElementById("pontosJogador");
    var spanMaquina = document.getElementById("pontosMaquina");
  
    spanJogador.innerHTML = `${pontosJogador}`;
    spanMaquina.innerHTML = `${pontosMaquina}`;
  }
  
  //Distribução das Cartas
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
    cartas.splice(numeroCartaMaquina, 1);
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice(numeroCartaJogador, 1);
  
    document.getElementById("sortear").disabled = true; //Ativa o botão
    document.getElementById("jogar").disabled = false; //Destiva o botão
  
    exibeCartas();
  }
  
  //Exibir a carta do Jogador e seus Atributos e a carta da Maquina mas só a imagem
  function exibeCartas() {
    maquina.innerHTML = `<p>${cartaMaquina.nome}</p>`;
    maquina.innerHTML += `<img src=${cartaMaquina.img} alt="${cartaMaquina.nome}" height="300px">`;
    maquina.style.border = "ridge 5px rgba(255, 0, 0, 0.541)";
    maquina.style.backgroundColor = "#000000ef";
  
    jogador.innerHTML = `<p>${cartaJogador.nome}</p>`;
    jogador.innerHTML += `<img src=${cartaJogador.img} alt="${cartaJogador.nome}" height="300px">`;
  
    for (var atributo in cartaJogador.atributos) {
      jogador.innerHTML += `<br><input type='radio' name='atributo' value='${atributo}'>  ${atributo}: ${cartaJogador.atributos[atributo]} <br>`;
    }
    jogador.style.border = "ridge 5px rgba(255, 0, 0, 0.541)";
    jogador.style.backgroundColor = "#000000ef";
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var res = document.querySelector("#resultado");
    var atributoSelecionado = obtemAtributoSelecionado();
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      res.innerHTML = "<p>Você Venceu</p>";
      pontosJogador++;
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      res.innerHTML = "<p>Você Perdeu</p>";
      pontosMaquina++;
    } else {
      res.innerHTML = "<p>Empatou</p>";
    }
  
    var audio = document.querySelector("audio");
    //Definição do Vencedor
    if (cartas.length == 0) {
      res.innerHTML = "<p>Fim de jogo</p>";
      if (pontosJogador > pontosMaquina) {
        res.innerHTML += '<p id="resultado-final">Você Venceu!</p>';
        audio.src =
          "https://static.wikia.nocookie.net/leagueoflegends/images/c/cb/Announcer_Female1_114.ogg/revision/latest?cb=20171210091748";
      } else if (pontosMaquina > pontosJogador) {
        res.innerHTML += '<p id="resultado-final">Você Perdeu!</p>';
        audio.src =
          "https://static.wikia.nocookie.net/leagueoflegends/images/2/2c/Announcer_Female1_051.ogg/revision/latest?cb=20171210091546";
      } else {
        res.innerHTML += '<p id="resultado-final">Empatou!</p>';
      }
    } else {
      document.getElementById("btnProximaRodada").disabled = false;
    }
    maquina.innerHTML += `<p>Vida: ${cartaMaquina.atributos.vida}</p>`;
    maquina.innerHTML += `<p>Mana: ${cartaMaquina.atributos.mana}</p>`;
    maquina.innerHTML += `<p>Ataque: ${cartaMaquina.atributos.ataque}</p>`;
    maquina.innerHTML += `<p>Armadura: ${cartaMaquina.atributos.armadura}</p>`;
  
    document.getElementById("jogar").disabled = true;
  
    atualizaPlacar();
    atualizaQuantidadeDeCartas();
  }
  
  function proximaRodada() {
    jogador.innerHTML = `<div id="jogador1"> </div>`;
    maquina.innerHTML = `<div id="jogador2"> </div>`;
    document.getElementById("sortear").disabled = false;
    document.getElementById("jogar").disabled = true;
    document.getElementById("btnProximaRodada").disabled = true;
  
    var divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
  
    maquina.style.border = "none";
    maquina.style.backgroundColor = "none";
  
    jogador.style.border = "none";
    jogador.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }