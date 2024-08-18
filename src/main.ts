if (CSS && "paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("dist/smoother-corners-worklet.js");
  CSS.paintWorklet.addModule("dist/smoother-border-worklet.js");
}
