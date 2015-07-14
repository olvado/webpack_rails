import { getResource } from './api-utils';
import CollectionActions from '../actions/collection-actions';

export function getCollection() {
  
  return getResource('/collections/1.json')
    .then(json => {
      CollectionActions.receiveCollection(json);
    });
}
