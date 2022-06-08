let espLarg = 10;
let espAltura = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura);
	  translate(-100,-130);
	  scale(0.3);
	  stroke(0);
      fill(255,204,153); //cara
	circle(75, 65, 100);
	fill(255,255,255); //olho esquerdo
	circle(50, 50, 20);
	fill(255,255,255); //olho direito
	circle(100, 50, 20);
	line(50, 80, 100, 80); //boca
	stroke(255);
	line(75, 300, 75, 115); //corpo
	line(50, 200, 75, 115); //braço esquerdo
	line(100, 200, 75, 115); //braço direito
	line(100, 385, 75, 300); //perna direita
	line(50, 385, 75, 300); //perna esquerda
	
      pop();
    }
  }
}

