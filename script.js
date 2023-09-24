const canvas = document.getElementById("myCanvas");
canvas.height = innerHeight;
canvas.width = innerWidth;
const context = canvas.getContext("2d");

function Circle() {
  this.x = Math.random() * innerWidth;
  this.y = Math.random() * innerHeight;
  this.r = Math.random() * 80;
  this.rad = this.r;
  this.dx = (Math.random() - 0.5) * 5;
  this.dy = (Math.random() - 0.5) * 5;

  this.red = Math.random() * 255;
  this.green = Math.random() * 255;
  this.blue = Math.random() * 255;
  this.a = Math.random();

  this.draw = () => {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 8, false);
    context.strokeStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.a})`;
    context.stroke();
    context.fillStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.a})`;

    context.fill();
  };

  this.update = () => {
    if (
      Math.abs(mouse.x - this.x) < this.r &&
      Math.abs(mouse.y - this.y) < this.r
    )
      this.r += 1;
    else if (this.r > this.rad) this.r -= 1;
    if (this.x + this.r > innerWidth || this.x - this.r < 0) this.dx = -this.dx;
    if (this.y + this.r > innerHeight || this.y - this.r < 0)
      this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;
    console.log("draw");
    this.draw();
  };
}

const mouse = {
  x: 0,
  y: 0,
};

window.onmousemove = (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
};

window.onresize = (e) => {
  init();
};

let circles;

function init() {
  context.height = innerHeight;
  context.width = innerWidth;
  circles = [];
  for (let i = 0; i < 100; i++) {
    circles.push(new Circle());
  }
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);

  console.log(circles);
  for (let i = 0; i < circles.length; i++) circles[i].update();
}
init();
animate();
