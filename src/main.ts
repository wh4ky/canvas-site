import './style.css'
import './vectors.ts'

var canvas: HTMLCanvasElement | null = document.getElementById("canv") as HTMLCanvasElement;
if (!canvas) {
  console.error("Canvas element 'canv' not found");
}

var context: CanvasRenderingContext2D = canvas.getContext("2d");

