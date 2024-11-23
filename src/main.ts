import drawLine from "./vectors.ts"

let canvas: HTMLCanvasElement = document.getElementById("app") as HTMLCanvasElement;
if (!canvas) {
  console.error("Canvas element 'app' not found");
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

drawLine(context, { x: 0, y: 0 }, { x: 10, y: 10 })

let gradient: CanvasGradient = context.createLinearGradient(0, 0, 200, 0) as CanvasGradient;
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "white");

// Fill with gradient
context.fillStyle = gradient;
context.fillRect(10, 10, 150, 80);

context.font = "30px Arial";
context.fillText("Hello World", 10, 50);
