let x, y;
let xSpeed, ySpeed;
let speedMultiplier;
let speedSlider;

function setup() {
  createCanvas(400, 300);
  x = width / 2;
  y = height / 2;
  xSpeed = 3;
  ySpeed = 2;
  speedMultiplier = 1;
  speedSlider = select('#speedSlider');
}

function draw() {
  background(220);
  fill(0, 0, 255);
  circle(x, y, 20);

  if (x + 10 > width || x - 10 < 0) {
    xSpeed = -xSpeed;
  }
  if (y + 10 > height || y - 10 < 0) {
    ySpeed = -ySpeed;
  }

  speedMultiplier = speedSlider.value();
  x += xSpeed * speedMultiplier;
  y += ySpeed * speedMultiplier;
}
