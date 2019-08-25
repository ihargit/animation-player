import Constants from '../constants/index';
import Utils from '../utils';

export default class Model {
  constructor() {
    // this.emptyPixelGridCache = {};
    this.width = Constants.DEFAULT.WIDTH;
    this.height = Constants.DEFAULT.HEIGHT;
    this.zoom = 1;
    this.penColor = Constants.DEFAULT_PEN_COLOR;
    this.canvasDraw = false;
    this.currentFrame = 0;
    this.emptyImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';
    this.frames = [this.emptyImage];
    this.fps = Constants.DEFAULT.FPS;
    this.animationIntervalId = undefined;
    // this.currentPreviewFrame = -1;
  }

  getWidth() {
    return this.width;
  }

  setWidth(width) {
    this.width = width;
  }

  getHeight() {
    return this.height;
  }

  setHeight(height) {
    this.height = height;
  }

  getZoom() {
    return this.zoom;
  }

  setZoom() {
    this.zoom = Utils.calculateZoom(this.width, this.height);
  }

  getColor() {
    return this.penColor;
  }

  getCanvasDrawStatus() {
    return this.canvasDraw;
  }

  setCanvasDrawStatus(boolean) {
    this.canvasDraw = boolean;
  }

  setCurrentFrame(frame) {
    this.currentFrame = frame;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }
}
