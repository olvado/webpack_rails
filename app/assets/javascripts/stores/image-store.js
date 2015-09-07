import alt from '../alt';
import ImageActions from '../actions/image-actions';
require('../utils/array-move');

class ImageStore {
  constructor() {
    this.bindActions(ImageActions);
    this.selectedImages = [];
    this.selectedImages = [];
  }

  onReceiveImages(data) {
    this.csrf = data.csrf;
    this.selectedImages = data.selectedImages;
    this.selectableImages = data.selectableImages
  }

  onUnselectImage(image) {
    this.selectedImages = this.selectedImages.filter((i) => {
      return i.id != image.id;
    });
    this.selectableImages.push(image);
  }

  onSelectImage(image) {
    this.selectableImages = this.selectableImages.filter((i) => {
      return i.id != image.id;
    });
    this.selectedImages.push(image);
  }

  onGetSelectedImages() {
    return this.selectedImages;
  }

  onCommitChanges(data) {
    console.log('onCommitChanges', data);
  }

  onUpdatePosition(positions) {
    console.log('onUpdatePosition', positions);
    this.selectedImages.move(positions.oldPosition, positions.newPosition);
  }

}

export default alt.createStore(ImageStore, 'ImageStore');