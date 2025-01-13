const WasmImports = {
  web: {
    log(ptr: any, len: string) {
      const message = decodeString(ptr, len);
      console.log(message);
      return;
    },
  },
};

const decodeString: Function = (ptr: any, len: number) => {
  const slice = new Uint8Array(
    wasmExports.memory.buffer,
    ptr,
    len
  );
  return new TextDecoder().decode(slice);
}

console.log("LOADING WASM MODULES");
const obj = await WebAssembly.instantiateStreaming(await fetch("/canvas-site/src/canvas.wasm"), WasmImports);
const wasmExports: any = obj.instance.exports;
console.log("WASM MODULES LOADED");

wasmExports.add(1, 5);

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
  em: number = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)![0]) as number;
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

  vw(percentage: number): number {
    return this.canvas.width * (percentage / 100);
  }

  vh(percentage: number): number {
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

