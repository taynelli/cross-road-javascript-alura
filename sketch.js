function setup() {
    createCanvas(500, 400);
    somDaTrilha.loop();
    //somDoPonto.loop();
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarros();
    movimentaAtor();
    verificaColisao();
    incluiPontos();
    marcaPonto();
  }