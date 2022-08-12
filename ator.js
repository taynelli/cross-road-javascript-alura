// Codigo do Ator 


let posicaoXAtor = 85;
let posicaoYAtor = 366;
let velocidadeAtor = 3;
let colisao = false; 
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, posicaoXAtor, posicaoYAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    posicaoYAtor -= 3;
  }
  //print(posicaoYAtor);
  if (keyIsDown(DOWN_ARROW))
    if(podeSeMover()){
      posicaoYAtor += 3;
    }
}

function verificaColisao(){
 // collidRectCicle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++ ){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, posicaoXAtor, posicaoYAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero())
        meusPontos -= 1;
    }
  }
}
function colidiu(){
  posicaoYAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color (255, 240, 60));
  text(meusPontos, width / 5, 27);
  
}

function marcaPonto(){
  if(posicaoYAtor == 3){
   meusPontos += 1;  
   voltaAtorParaPosicaoInicial();
    somDoPonto.play();
  }
}

function voltaAtorParaPosicaoInicial(){
   posicaoYAtor = 366;

}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return posicaoYAtor < 366; 
}