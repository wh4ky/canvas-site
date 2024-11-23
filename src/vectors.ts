type Vector2D = {
  x: number,
  y: number
}

type Vector3D = {
  x: number,
  y: number,
  z: number
}

function drawLine(ctx: CanvasRenderingContext2D, from: Vector2D, to: Vector2D) {
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
}