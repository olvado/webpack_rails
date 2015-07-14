import React from 'react';
import BigBird from 'bigbird';

import Collection from './components/collection/collection';

// BigBird Initializer
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
            collectionUrl = container.dataset.collectionurl,
            imagesUrl = container.dataset.imagesurl;

        React.render(
          <Collection collectionUrl={ collectionUrl } imagesUrl={ imagesUrl } />,
          container
        );
      }
    }
  }
});
