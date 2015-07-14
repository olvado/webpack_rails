import alt from '../alt';
import { getImageList } from '../utils/image-utils';

class ImageActions {

  constructor() {
    this.generateActions(
      'receiveImages',
      'getImage'
    );
  }

  getImage(image) {
    ImageActions.getImage(image);
  }

  getImageList() {
    getImageList();
  }

}

export default alt.createActions(ImageActions);