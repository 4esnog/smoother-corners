/**
 * This module temporarily defines the Paint Worklet types according to the CSS Paint API Level 1 CR Draft.
 * It should be replaced with TS library when it is implemented.
 * @see https://www.w3.org/TR/css-paint-api-1/
 * @see https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1192
 */

type CanvasFillRule = "evenodd" | "nonzero";
type GlobalCompositeOperation =
  | "color"
  | "color-burn"
  | "color-dodge"
  | "copy"
  | "darken"
  | "destination-atop"
  | "destination-in"
  | "destination-out"
  | "destination-over"
  | "difference"
  | "exclusion"
  | "hard-light"
  | "hue"
  | "lighten"
  | "lighter"
  | "luminosity"
  | "multiply"
  | "overlay"
  | "saturation"
  | "screen"
  | "soft-light"
  | "source-atop"
  | "source-in"
  | "source-out"
  | "source-over"
  | "xor";
type CanvasLineCap = "butt" | "round" | "square";
type CanvasLineJoin = "bevel" | "miter" | "round";
type ImageSmoothingQuality = "high" | "low" | "medium";
// // type CanvasImageSource = HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas | VideoFrame;
type CanvasImageSource = unknown;

interface Path2D extends CanvasPath {
  addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
}

declare const Path2D: {
  prototype: Path2D;
  new (path?: Path2D | string): Path2D;
};

interface CanvasCompositing {
  globalAlpha: number;
  globalCompositeOperation: GlobalCompositeOperation;
}

interface CanvasDrawImage {
  drawImage(image: CanvasImageSource, dx: number, dy: number): void;
  drawImage(
    image: CanvasImageSource,
    dx: number,
    dy: number,
    dw: number,
    dh: number,
  ): void;
  drawImage(
    image: CanvasImageSource,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number,
  ): void;
}

interface CanvasDrawPath {
  beginPath(): void;
  clip(fillRule?: CanvasFillRule): void;
  clip(path: Path2D, fillRule?: CanvasFillRule): void;
  fill(fillRule?: CanvasFillRule): void;
  fill(path: Path2D, fillRule?: CanvasFillRule): void;
  isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
  isPointInPath(
    path: Path2D,
    x: number,
    y: number,
    fillRule?: CanvasFillRule,
  ): boolean;
  isPointInStroke(x: number, y: number): boolean;
  isPointInStroke(path: Path2D, x: number, y: number): boolean;
  stroke(path?: Path2D): void;
}

interface CanvasFillStrokeStyles {
  fillStyle: string | CanvasGradient | CanvasPattern;
  strokeStyle: string | CanvasGradient | CanvasPattern;
  createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
  createLinearGradient(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
  ): CanvasGradient;
  createPattern(
    image: CanvasImageSource,
    repetition: string | null,
  ): CanvasPattern | null;
  createRadialGradient(
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number,
  ): CanvasGradient;
}

interface CanvasFilters {
  filter: string;
}

interface CanvasGradient {
  addColorStop(offset: number, color: string): void;
}

declare const CanvasGradient: {
  prototype: CanvasGradient;
  new (): CanvasGradient;
};

interface CanvasImageSmoothing {
  imageSmoothingEnabled: boolean;
  imageSmoothingQuality: ImageSmoothingQuality;
}

interface CanvasPath {
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number,
  ): void;
  closePath(): void;
  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void;
  lineTo(x: number, y: number): void;
  moveTo(x: number, y: number): void;
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  rect(x: number, y: number, w: number, h: number): void;
  roundRect(
    x: number,
    y: number,
    w: number,
    h: number,
    radii?: number | DOMPointInit | (number | DOMPointInit)[],
  ): void;
}

interface CanvasPathDrawingStyles {
  lineCap: CanvasLineCap;
  lineDashOffset: number;
  lineJoin: CanvasLineJoin;
  lineWidth: number;
  miterLimit: number;
  getLineDash(): number[];
  setLineDash(segments: number[]): void;
}

interface CanvasPattern {
  setTransform(transform?: DOMMatrix2DInit): void;
}

declare const CanvasPattern: {
  prototype: CanvasPattern;
  new (): CanvasPattern;
};

interface CanvasRect {
  clearRect(x: number, y: number, w: number, h: number): void;
  fillRect(x: number, y: number, w: number, h: number): void;
  strokeRect(x: number, y: number, w: number, h: number): void;
}

interface CanvasShadowStyles {
  shadowBlur: number;
  shadowColor: string;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

interface CanvasState {
  reset(): void;
  restore(): void;
  save(): void;
}

interface CanvasTransform {
  getTransform(): DOMMatrix;
  resetTransform(): void;
  rotate(angle: number): void;
  scale(x: number, y: number): void;
  setTransform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
  ): void;
  setTransform(transform?: DOMMatrix2DInit): void;
  transform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
  ): void;
  translate(x: number, y: number): void;
}

interface DOMMatrix2DInit {
  a?: number;
  b?: number;
  c?: number;
  d?: number;
  e?: number;
  f?: number;
  m11?: number;
  m12?: number;
  m21?: number;
  m22?: number;
  m41?: number;
  m42?: number;
}

interface DOMMatrixInit extends DOMMatrix2DInit {
  is2D?: boolean;
  m13?: number;
  m14?: number;
  m23?: number;
  m24?: number;
  m31?: number;
  m32?: number;
  m33?: number;
  m34?: number;
  m43?: number;
  m44?: number;
}

interface DOMMatrix extends DOMMatrixReadOnly {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  m11: number;
  m12: number;
  m13: number;
  m14: number;
  m21: number;
  m22: number;
  m23: number;
  m24: number;
  m31: number;
  m32: number;
  m33: number;
  m34: number;
  m41: number;
  m42: number;
  m43: number;
  m44: number;
  invertSelf(): DOMMatrix;
  multiplySelf(other?: DOMMatrixInit): DOMMatrix;
  preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
  rotateAxisAngleSelf(
    x?: number,
    y?: number,
    z?: number,
    angle?: number,
  ): DOMMatrix;
  rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
  rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
  scale3dSelf(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  scaleSelf(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  setMatrixValue(transformList: string): DOMMatrix;
  skewXSelf(sx?: number): DOMMatrix;
  skewYSelf(sy?: number): DOMMatrix;
  translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare const DOMMatrix: {
  prototype: DOMMatrix;
  new (init?: string | number[]): DOMMatrix;
  fromFloat32Array(array32: Float32Array): DOMMatrix;
  fromFloat64Array(array64: Float64Array): DOMMatrix;
  fromMatrix(other?: DOMMatrixInit): DOMMatrix;
};

interface DOMMatrixReadOnly {
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly d: number;
  readonly e: number;
  readonly f: number;
  readonly is2D: boolean;
  readonly isIdentity: boolean;
  readonly m11: number;
  readonly m12: number;
  readonly m13: number;
  readonly m14: number;
  readonly m21: number;
  readonly m22: number;
  readonly m23: number;
  readonly m24: number;
  readonly m31: number;
  readonly m32: number;
  readonly m33: number;
  readonly m34: number;
  readonly m41: number;
  readonly m42: number;
  readonly m43: number;
  readonly m44: number;
  flipX(): DOMMatrix;
  flipY(): DOMMatrix;
  inverse(): DOMMatrix;
  multiply(other?: DOMMatrixInit): DOMMatrix;
  rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
  rotateAxisAngle(
    x?: number,
    y?: number,
    z?: number,
    angle?: number,
  ): DOMMatrix;
  rotateFromVector(x?: number, y?: number): DOMMatrix;
  scale(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  scale3d(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  /**
   * @deprecated
   */
  scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;
  skewX(sx?: number): DOMMatrix;
  skewY(sy?: number): DOMMatrix;
  toFloat32Array(): Float32Array;
  toFloat64Array(): Float64Array;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): any;
  transformPoint(point?: DOMPointInit): DOMPoint;
  translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
  toString(): string;
}

declare const DOMMatrixReadOnly: {
  prototype: DOMMatrixReadOnly;
  new (init?: string | number[]): DOMMatrixReadOnly;
  fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
  fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
  fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
};

interface DOMPointInit {
  w?: number;
  x?: number;
  y?: number;
  z?: number;
}

interface DOMPoint extends DOMPointReadOnly {
  w: number;
  x: number;
  y: number;
  z: number;
}

declare const DOMPoint: {
  prototype: DOMPoint;
  new (x?: number, y?: number, z?: number, w?: number): DOMPoint;
  fromPoint(other?: DOMPointInit): DOMPoint;
};

interface DOMPointReadOnly {
  readonly w: number;
  readonly x: number;
  readonly y: number;
  readonly z: number;
  matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): any;
}

declare const DOMPointReadOnly: {
  prototype: DOMPointReadOnly;
  new (x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
  fromPoint(other?: DOMPointInit): DOMPointReadOnly;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace CSS {
    const paintWorklet: {
      addModule: (path: string) => void;
    };
  }

  interface PaintRenderingContext2DSettings {
    alpha?: boolean;
  }

  interface PaintRenderingContext2D
    extends CanvasCompositing,
      CanvasDrawImage,
      CanvasDrawPath,
      CanvasFillStrokeStyles,
      CanvasFilters,
      CanvasImageSmoothing,
      CanvasPath,
      CanvasPathDrawingStyles,
      CanvasRect,
      CanvasShadowStyles,
      CanvasState,
      CanvasTransform {
    // readonly canvas: HTMLCanvasElement;
    getContextAttributes(): PaintRenderingContext2DSettings;
  }

  interface PaintSize {
    readonly width: number;
    readonly height: number;
  }

  interface CSSUnparsedValue {
    readonly length: number;
    toString(): string;
  }

  interface StyleMap<K = string> extends Map<K, CSSUnparsedValue> {
    get(key: K): CSSUnparsedValue;
  }

  type ArgsList = unknown[];

  abstract class Paint<
    TPropsKeys extends string = string,
    TStyleMap extends StyleMap<TPropsKeys> = StyleMap<TPropsKeys>,
    TArgsList extends ArgsList = ArgsList,
  > {
    static get inputProperties(): string[] | undefined;
    static get inputArguments(): string[] | undefined;
    static get contextOptions(): PaintRenderingContext2DSettings | undefined;
    paint(
      ctx: PaintRenderingContext2D,
      size: PaintSize,
      styleMap: TStyleMap,
      args: TArgsList,
    ): void;
  }

  const devicePixelRatio: number;
  function registerPaint(name: string, paintCtor: new () => Paint): void;
}

export {};
