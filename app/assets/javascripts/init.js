import React from 'react';
import BigBird from 'bigbird';

import Collection from './components/collection/collection';


(function() {
  var send = XMLHttpRequest.prototype.send,
      token = document.querySelector('meta[name="csrf-token"]').attributes.content.nodeValue;
  XMLHttpRequest.prototype.send = function(data) {
    this.setRequestHeader('X-CSRF-Token', token);
    return send.apply(this, arguments);
  };
}());

// Bird Initializer
var Application = new BigBird.Initializer({
  modules: {
    common: {
      initialize: () => {
        console.log('initialize');
      }
    },
    collections: {
      edit: () => {
        var container = document.getElementById('manageItems'),
            collectionId = container.dataset.collectionid,
            imagesUrl = container.dataset.imagesurl,
            updateUrl = container.dataset.updateurl

        React.render(
          <Collection collectionId={ collectionId } imagesUrl={ imagesUrl } updateUrl={ updateUrl } />,
          container
        );
      }
    }
  }
});
