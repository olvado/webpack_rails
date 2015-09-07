require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import url from 'url';

export function getResource(path, options = {}) {
  return fetch(url.resolve("http://localhost:3000", path), options)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      return err;
    });
}
