export default class Utils {
  static htmlToDocFragment(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
  }

  static calculateZoom(width, height) {
    let zoom = 1;
    const mainColumn = document.querySelector('.main-column');

    if (mainColumn) {
      const colHeight = mainColumn.clientHeight;
      const colWidth = mainColumn.clientWidth;
      zoom = Math.min(colHeight, colWidth) / Math.min(width, height);
    }
    return zoom;
  }

  static resizeCanvasBackground(canvasWrapper, width, height) {
    const canvasParentNode = canvasWrapper;
    canvasParentNode.querySelector('.canvas-background').style.width = `${width}px`;
    canvasParentNode.querySelector('.canvas-background').style.height = `${height}px`;
  }

  static renumberTiles(argTileNumber, moreLess) {
    const tiles = document.querySelectorAll('.preview-tile');
    tiles.forEach((oneTile) => {
      const tile = oneTile;
      const thisTileNumber = Number(oneTile.dataset.tileNumber);
      if (moreLess === 'more') {
        if (thisTileNumber > argTileNumber) {
          tile.dataset.tileNumber = `${thisTileNumber + 1}`;
        }
      }
      if (moreLess === 'less') {
        if (thisTileNumber > argTileNumber) {
          tile.dataset.tileNumber = `${thisTileNumber - 1}`;
        }
      }
    });
  }

  static clearTileSelection() {
    const tiles = document.querySelectorAll('.preview-tile');
    tiles.forEach((oneTile) => {
      const tile = oneTile;
      tile.classList.remove('selected');
    });
  }

  static redrawMainCanvas(model, framePosition) {
    const canvas = document.querySelector('.drawing-canvas');
    const targetTileCanvas = document.querySelectorAll(`[data-tile-number='${framePosition}']`)[0]
      .querySelector('.tile-view');
    const ctx = canvas.getContext('2d');
    if (model.frames[framePosition] !== 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(targetTileCanvas, 0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  static copyCanvasToPreview(model) {
    const canvas = document.querySelector('.drawing-canvas');
    const targetTileCanvas = document.querySelectorAll(`[data-tile-number='${model.getCurrentFrame()}']`)[0]
      .querySelector('.tile-view');
    const ctx = targetTileCanvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(canvas, 0, 0, 96, 96);
  }

  static changePreviewBackground(image) {
    const previewBackgroundContainer = document.querySelector('.background-image-frame-container');
    previewBackgroundContainer.style = `background-repeat: no-repeat; background-size: contain; background-image: url(${image})`;
  }
}
