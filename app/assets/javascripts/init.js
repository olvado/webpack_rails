var React = require('react');
var BigBird = require('bigbird');

import ImageCollection from './components/image-collection/collection';

// BigBird Initializer
let Application = new BigBird.Initializer({
  modules: {
    common: {
      initialize: function initializeAction() {
        console.log('initialize');
      }
    },
    pages: {
      index: function() {
        console.log('pages#index');

        React.render(
          <ImageCollection url="/collection.json" />,
          document.getElementById('imageCollection')
        );
      }
    }
  }
});

