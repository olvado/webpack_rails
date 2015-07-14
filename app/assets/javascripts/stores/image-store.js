import alt from '../alt';
import ImageActions from '../actions/image-actions';

class ImageStore {
  constructor() {
    this.bindActions(ImageActions);
    this.images = [];
    this.image = {}
  }

  onGetImage(image) {
    this.image = image;
  }

  onReceiveImages(images) {
    this.images = images;
  }

}

export default alt.createStore(ImageStore, 'ImageStore');