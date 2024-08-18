import { superellipse } from "./superellipse";

type PropertyKey = "--smooth-corners";
type MyStyleMap = StyleMap<PropertyKey>;

class SmootherCornersPainter implements Paint {
  static get inputProperties(): PropertyKey[] {
    return ["--smooth-corners"];
  }

  paint(ctx: PaintRenderingContext2D, geom: PaintSize, properties: MyStyleMap) {
    const rawParameters = properties.get("--smooth-corners").toString();
    const [nX, nY] = rawParameters.replace(/ /g, "").split(",");

    const width = geom.width / 2;
    const height = geom.height / 2;
    const smooth = superellipse(width, height, parseFloat(nX), parseFloat(nY));

    ctx.fillStyle = "#000";
    ctx.setTransform(1, 0, 0, 1, width, height);

    ctx.beginPath();
    for (let i = 0; i < smooth.length; i++) {
      const { x, y } = smooth[i];
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    ctx.fill();
  }
}

registerPaint("smoother-corners", SmootherCornersPainter);
