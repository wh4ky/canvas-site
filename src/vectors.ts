type Vector2D = {
  x: number,
  y: number
}

//type Vector3D = {
//x: number,
//y: number,
//z: number
//}

function drawLine(ctx: CanvasRenderingContext2D, frompoint: Vector2D, topoint: Vector2D) {
  ctx.moveTo(frompoint.x, frompoint.y);
  ctx.lineTo(topoint.x, topoint.y);
  ctx.stroke();
}

export default drawLine
