import * as HTML from './index.html';
import './index.scss';
import Utils from '../../utils';

export default class Tools {
  constructor(model) {
    this.model = model;
    this.html = HTML;
  }

  render() {
    const tools = document.createElement('template');
    tools.innerHTML = this.html;
    return tools.content;
  }

  canvasDownEventHandler(event) {
    this.model.setCanvasDrawStatus(true);
    const canvas = document.querySelector('.drawing-canvas');
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const rect = canvas.getBoundingClientRect();
    const cellWidth = this.model.getZoom();
    const cellX = Math.floor((event.clientX - rect.left) / cellWidth) * cellWidth;
    const cellY = Math.floor((event.clientY - rect.top) / cellWidth) * cellWidth;

    ctx.fillStyle = this.model.getColor();
    ctx.fillRect(cellX, cellY, cellWidth, cellWidth);
  }

  canvasUpEventHandler() {
    if (this.model.getCanvasDrawStatus()) {
      this.model.setCanvasDrawStatus(false);
      const canvas = document.querySelector('.drawing-canvas');
      this.model.frames[this.model.getCurrentFrame()] = canvas.toDataURL();
      const targetTileCanvas = document.querySelectorAll(`[data-tile-number='${this.model.getCurrentFrame()}']`)[0].querySelector('.tile-view');
      const ctx = targetTileCanvas.getContext('2d');
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(canvas, 0, 0, 96, 96);
      if (this.model.fps === 0) {
        Utils.changePreviewBackground(this.model.frames[this.model.currentFrame]);
      }
    }
  }

  canvasMoveEventHandler(event) {
    if (this.model.getCanvasDrawStatus()) {
      const canvas = document.querySelector('.drawing-canvas');
      const ctx = canvas.getContext('2d');
      const rect = canvas.getBoundingClientRect();
      const cellWidth = this.model.getZoom();
      const cellX = Math.floor((event.clientX - rect.left) / cellWidth) * cellWidth;
      const cellY = Math.floor((event.clientY - rect.top) / cellWidth) * cellWidth;

      ctx.fillStyle = this.model.getColor();
      ctx.fillRect(cellX, cellY, cellWidth, cellWidth);
    }
  }
}
