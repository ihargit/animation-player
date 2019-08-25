import * as HTML from './index.html';
import './index.scss';
import * as TILE from './tile.html';
import Utils from '../../utils/index';

export default class PreviewList {
  constructor(model) {
    this.html = HTML;
    this.tile = TILE;
    this.model = model;
  }

  init() {
    const list = Utils.htmlToDocFragment(this.html);
    list.querySelector('.preview-list').prepend(this.renderTile());
    return list;
  }

  renderTile() {
    return Utils.htmlToDocFragment(this.tile);
  }

  addTileToPreviewList() {
    const list = document.querySelector('.preview-list');
    let tile = Utils.htmlToDocFragment(TILE);
    list.insertBefore(tile, list.lastElementChild);
    Utils.clearTileSelection();
    tile = list.lastElementChild.previousElementSibling;
    tile.classList.add('selected');
    this.model.frames.push(this.model.emptyImage);
    tile.setAttribute('data-tile-number', this.model.frames.length - 1);
    this.model.setCurrentFrame(this.model.frames.length - 1);
    Utils.redrawMainCanvas(this.model, this.model.getCurrentFrame());
    if (this.model.fps === 0) {
      Utils.changePreviewBackground(this.model.frames[this.model.currentFrame]);
    }
  }

  deleteTileFromPreviewList(e) {
    if (e.target.closest('.delete-frame-action')
      && document.querySelector('.preview-list').childElementCount > 2) {
      const tile = e.target.closest('.preview-tile');
      const tileNumber = Number(tile.dataset.tileNumber);
      this.model.frames.splice(tileNumber, 1);
      if (tile.classList.contains('selected')) {
        const previousTile = tile.previousElementSibling;
        if (previousTile) {
          previousTile.classList.add('selected');
          this.model.setCurrentFrame(this.model.getCurrentFrame() - 1);
          Utils.redrawMainCanvas(this.model, tileNumber - 1);
          if (this.model.fps === 0) {
            Utils.changePreviewBackground(this.model.frames[this.model.currentFrame]);
          }
        } else {
          Utils.clearTileSelection();
          tile.nextElementSibling.classList.add('selected');
          Utils.redrawMainCanvas(this.model, tileNumber + 1);
          if (this.model.fps === 0) {
            Utils.changePreviewBackground(this.model.frames[this.model.currentFrame]);
          }
        }
      } else if (tileNumber < this.model.getCurrentFrame()) {
        if (this.model.fps === 0) {
          Utils.changePreviewBackground(this.model.frames[this.model.currentFrame]);
        }
        this.model.setCurrentFrame(this.model.getCurrentFrame() - 1);
      }
      Utils.renumberTiles(tileNumber, 'less');
      tile.remove();
    } else if (e.target.closest('.delete-frame-action')
      && document.querySelector('.preview-list').childElementCount <= 2) {
      e.target.closest('.delete-frame-action').blur();
    }
  }

  duplicateTileFromPreviewList(e) {
    if (e.target.closest('.duplicate-frame-action')) {
      const list = document.querySelector('.preview-list');
      const tile = e.target.closest('.preview-tile');
      const tileNumber = Number(tile.dataset.tileNumber);
      const clone = tile.cloneNode(true);

      this.model.frames.splice(tileNumber + 1, 0,
        this.model.frames[tileNumber]);
      Utils.renumberTiles(tileNumber, 'more');
      clone.setAttribute('data-tile-number', tileNumber + 1);
      Utils.clearTileSelection();
      clone.classList.add('selected');
      this.model.setCurrentFrame(tileNumber + 1);
      list.insertBefore(clone, e.target.closest('.preview-tile').nextSibling);
      Utils.redrawMainCanvas(this.model, this.model.getCurrentFrame() - 1);
      Utils.copyCanvasToPreview(this.model);
      e.target.closest('.duplicate-frame-action').blur();
      if (this.model.fps === 0) {
        Utils.changePreviewBackground(this.model.frames[this.model.currentFrame]);
      }
    }
  }

  selectTileOnClick(e) {
    if (e.target.closest('.tile-view')) {
      const tile = e.target.closest('.preview-tile');

      if (this.model.getCurrentFrame() !== Number(tile.dataset.tileNumber)) {
        Utils.clearTileSelection();
        tile.classList.add('selected');
        this.model.setCurrentFrame(Number(tile.dataset.tileNumber));
        Utils.redrawMainCanvas(this.model, this.model.getCurrentFrame());
        if (this.model.fps === 0) {
          Utils.changePreviewBackground(this.model.frames[this.model.currentFrame]);
        }
      }
    }
  }
}
