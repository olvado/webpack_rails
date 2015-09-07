import { getResource } from './api-utils';
import ImageActions from '../actions/image-actions';
import ImageStore from '../stores/image-store';
import csrf from './csrf-token';

export function getImages(imagesUrl) {
  return getResource(imagesUrl)
    .then(json => {
      ImageActions.receiveImages(json);
    });
}

export function updateImages(imagesUrl, images) {
  let body = images.map((i) => { return i.id });
  console.log("images", JSON.stringify(body));
  return getResource(imagesUrl, {
            method: 'POST',
            body: JSON.stringify(body),
            credentials: 'same-origin',
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "X-CSRF-Token": csrf()
            }
          })
        .then(json => {
          ImageActions.commitChanges(json);
        });
}
