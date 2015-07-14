import { getResource } from './api-utils';
import ImageActions from '../actions/image-actions';

export function getImageList() {
  
  return getResource('/images.json')
    .then(json => {
      ImageActions.receiveImages(json);
    });
}
