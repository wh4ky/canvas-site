import * as Canvas from "./canvas.ts"

const page: any = new Canvas.Page();

page.reload = () => {
  let em = page.em;
  const vh = (x: number) => page.vh(x);
  const vw = (x: number) => page.vw(x);

  // let gradient: CanvasGradient = page.context.createLinearGradient(0, 0, 200, 0) as CanvasGradient;
  // gradient.addColorStop(0, "red");
  // gradient.addColorStop(1, "white");

  // page.context.fillStyle = gradient;
  // page.context.fillRect(10, 10, 150, 80);

  page.context.font = `${1 * em}px Arial`;
  const header: string = "Welcome to The Canvas Web" as const;
  page.context.fillText(header, vw(1), (vh(1) + 0.5 * em));
  page.drawLine({ x: 0, y: (vh(1) + em) }, { x: (header.length - 11) * em, y: (vh(1) + em) }, 0.3 * em, "red")
}; page.reload();
