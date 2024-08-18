import { superellipse } from "./superellipse";

type PropertyKey = "--smooth-corners" | "--border-width" | "--border-color";
type MyStyleMap = StyleMap<PropertyKey>;

class SmoothBorderPainter implements Paint {
  static get inputProperties(): PropertyKey[] {
    return ["--smooth-corners", "--border-width", "--border-color"];
  }

  paint(ctx: PaintRenderingContext2D, geom: PaintSize, properties: MyStyleMap) {
    const rawSmoothingParameters = properties
      .get("--smooth-corners")
      .toString();
    const [nX, nY] = rawSmoothingParameters.replace(/ /g, "").split(",");

    const rawBorderWidth = properties.get("--border-width").toString();
    const borderColor = properties.get("--border-color").toString();

    const lineWidth = parseInt(rawBorderWidth, 10);

    const outerWidth = geom.width / 2;
    const outerHeight = geom.height / 2;

    const innerWidth = outerWidth - lineWidth;
    const innerHeight = outerHeight - lineWidth;

    const outerSmooth = superellipse(
      outerWidth,
      outerHeight,
      parseFloat(nX),
      parseFloat(nY),
    );
    const innerSmooth = superellipse(
      innerWidth,
      innerHeight,
      parseFloat(nX),
      parseFloat(nY),
    );

    ctx.setTransform(1, 0, 0, 1, outerWidth, outerHeight);

    ctx.beginPath();
    for (let i = 0; i < outerSmooth.length; i++) {
      const { x, y } = outerSmooth[i];
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    for (let i = 0; i < innerSmooth.length; i++) {
      const { x, y } = innerSmooth[i];
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    ctx.fillStyle = borderColor;
    ctx.fill("evenodd");
  }
}

registerPaint("smoother-border", SmoothBorderPainter);
