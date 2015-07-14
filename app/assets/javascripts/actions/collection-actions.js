import alt from '../alt';
import { getResource } from '../utils/api-utils';
import Actions from './collection-actions';

class CollectionActions {

  constructor() {
    this.generateActions(
      'receiveCollection',
      'receiveImage'
    );
  }

  addImage(image) {
    Actions.receiveImage(image);
  }

  getCollection(collectionUrl) {
    return getResource(collectionUrl)
      .then(json => {
        Actions.receiveCollection(json);
      });
  }

}

export default alt.createActions(CollectionActions);
