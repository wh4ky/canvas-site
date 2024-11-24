import * as Canvas from "./canvas.ts"

const page: any = new Canvas.Page();

page.reload = () => {
  // let gradient: CanvasGradient = page.context.createLinearGradient(0, 0, 200, 0) as CanvasGradient;
  // gradient.addColorStop(0, "red");
  //gradient.addColorStop(1, "white");

  // page.context.fillStyle = gradient;
  // page.context.fillRect(10, 10, 150, 80);

  page.context.font = (page.getWidthPercentage(2)) + "px Arial";
  page.context.fillText("Welcome to The Canvas Web", page.getWidthPercentage(1), page.getWidthPercentage(4));
  page.drawLine({ x: 0, y: page.getHeightPercentage(13) }, { x: page.getWidthPercentage(40), y: page.getHeightPercentage(13) }, 5, "red")
};

page.reload();
