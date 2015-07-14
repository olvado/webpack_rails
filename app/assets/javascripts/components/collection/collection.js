import React from 'react';
import connectToStores from 'alt/utils/connectToStores';

import CollectionStore from '../../stores/collection-store.js';
import CollectionActions from '../../actions/collection-actions.js';

import Images from '../images/images';
import ImageList from '../images/image-list';


@connectToStores
class Collection extends React.Component {

  static propTypes = {
    collection: React.PropTypes.object
  }

  static getStores() {
    return [CollectionStore];
  }

  static getPropsFromStores() {
    return CollectionStore.getState();
  }

  static getInitialState() {
    return CollectionStore.getState();
  }

  constructor(props) {
    super(props);
    CollectionActions.getCollection(this.props.collectionUrl);
  }

  render() {
    let { collection } = this.props;

    return (
      <div className="image-collection">
        <h1>Images for {collection.title}</h1>
        <div className="image-list-container">
          { collection.images && (
            <ImageList images={ collection.images }  />
          )}
          <Images collection={ collection } />
        </div>
      </div>
    );
  }
}

export default Collection;
