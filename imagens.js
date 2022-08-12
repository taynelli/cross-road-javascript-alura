// Imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarros = [];

// sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage ("imagens/ator-1.png");
  let imagemDoCarro = loadImage ("imagens/carro-1.png");
  let imagemDoCarro2 = loadImage ("imagens/carro-2.png");
  let imagemDoCarro3 = loadImage ("imagens/carro-3.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}