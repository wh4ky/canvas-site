import * as Canvas from "./canvas.ts"

const page: any = new Canvas.Page();

page.reload = () => {
  // let gradient: CanvasGradient = page.context.createLinearGradient(0, 0, 200, 0) as CanvasGradient;
  // gradient.addColorStop(0, "red");
  //gradient.addColorStop(1, "white");

  // page.context.fillStyle = gradient;
  // page.context.fillRect(10, 10, 150, 80);

  page.context.font = "30px Arial";
  page.context.fillText("Welcome to The Canvas Web", 10, 50);
  page.drawLine({ x: 0, y: 60 }, { x: 500, y: 60 }, 5, "red")
};

page.reload();
