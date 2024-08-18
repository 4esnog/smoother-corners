export function superellipse(a: number, b: number, nX = 4, nY: number) {
  if (Number.isNaN(nX)) nX = 4;
  if (typeof nY === "undefined" || Number.isNaN(nY)) nY = nX;
  if (nX > 100) nX = 100;
  if (nY > 100) nY = 100;
  if (nX < 0.00000000001) nX = 0.00000000001;
  if (nY < 0.00000000001) nY = 0.00000000001;

  const nX2 = 2 / nX;
  const nY2 = nY ? 2 / nY : nX2;
  const steps = 360;
  const step = (2 * Math.PI) / steps;

  const points = (t: number) => {
    const cosT = Math.cos(t);
    const sinT = Math.sin(t);
    return {
      x: Math.abs(cosT) ** nX2 * a * Math.sign(cosT),
      y: Math.abs(sinT) ** nY2 * b * Math.sign(sinT),
    };
  };

  return Array.from({ length: steps }, (_, i) => points(i * step));
}
