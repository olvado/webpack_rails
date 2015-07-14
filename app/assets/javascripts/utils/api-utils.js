import fetch from 'isomorphic-fetch';
import url from 'url';

export function getResource(path, options = {}) {
  return fetch(url.resolve("http://localhost:3000", path))
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
}