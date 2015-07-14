import { _ } from 'underscore';
import alt from '../alt';
import CollectionActions from '../actions/collection-actions';
import ImageActions from '../actions/image-actions';

class CollectionStore {
  constructor() {
    this.bindActions(CollectionActions);
    this.collection = {}
  }

  onReceiveImage(image) {
    let imageToMatch = _.findWhere(this.collection.images, {id: image.id});
    if (_.isUndefined(imageToMatch)) {
      console.log("Add Image to Collection");
      this.collection.images.push(image);
    } else {
      console.log("Remove Image from Collection");
      this.collection.images = this.collection.images.filter((i) => {
                                     return i.id !== image.id;
                                   });
    }
  }

  onReceiveCollection(collection) {
    this.collection = collection;
  }
}

export default alt.createStore(CollectionStore, 'CollectionStore');