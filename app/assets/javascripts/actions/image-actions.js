import alt from '../alt';
import { getImages, updateImages } from '../utils/image-utils';

class ImageActions {

  constructor() {
    this.generateActions(
      'receiveImages',
      'unselectImage',
      'selectImage',
      'commitChanges',
      'getSelectedImages',
      'updatePosition'
    );
  }

  getImages(imagesUrl) {
    getImages(imagesUrl);
  }

  updateImages(updateUrl, images) {
    updateImages(updateUrl, images);
  }

}

export default alt.createActions(ImageActions);
