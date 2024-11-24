export type Vector2D = {
  x: number,
  y: number
};

export type Vector3D = {
  x: number,
  y: number,
  z: number
};

export class Page {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  // glcontext: WebGLRenderingContext;
  reload: () => void = () => { };

  constructor() {
    this.canvas = document.createElement('canvas') as HTMLCanvasElement;
    if (!this.canvas) {
      throw new Error("Can't create canvas.");
    }

    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!this.context) {
      throw new Error("Can't create context.");
    }

    this.resizeCanvas();

    window.addEventListener('resize', () => this.resizeCanvas());
    window.addEventListener("Beforeunload", () => this.resizeCanvas());

    document.body.appendChild(this.canvas);
  }

  resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.reload();
    console.log("Triggered Reload.");
  }

  getWidthPercentage(percentage: number): number {
    return this.canvas.width * (percentage / 100);
  }

  getHeightPercentage(percentage: number): number {
    return this.canvas.height * (percentage / 100);
  }

  drawLine(fromPoint: Vector2D, toPoint: Vector2D, thickness?: number, style?: string): void {
    if (thickness) { this.context.lineWidth = thickness; }
    if (style) { this.context.strokeStyle = style; } else { this.context.strokeStyle = "black"; }
    this.context.beginPath();
    this.context.moveTo(fromPoint.x, fromPoint.y);
    this.context.lineTo(toPoint.x, toPoint.y);
    this.context.stroke();
    console.log("Made line with:\nFrom: x:", fromPoint.x, " y:", fromPoint.y, "\nTo x:", toPoint.x, " y:", toPoint.y);
  }
};

