import * as HTML from './index.html';
import './index.scss';
import Utils from '../../utils/index';
import CanvasTemplate from './canvas';
// import Model from '../../model/index';

export default class Canvas {
  constructor() {
    this.html = HTML;
  }

  render(model) {
    const width = model.getWidth() * model.getZoom();
    const height = model.getHeight() * model.getZoom();
    const canvasWrapper = Utils.htmlToDocFragment(this.html);
    const canvasClasses = ['canvas', 'drawing-canvas'];
    const newCanvas = CanvasTemplate.createCanvas(width, height, canvasClasses);
    canvasWrapper.querySelector('.drawing-canvas-container').prepend(newCanvas);
    Utils.resizeCanvasBackground(canvasWrapper, width, height);
    return canvasWrapper;
  }
}
