import React from 'react';
import classNames from 'classnames';
import connectToStores from 'alt/utils/connectToStores';

import ImageStore from '../../stores/image-store.js';
import ImageActions from '../../actions/image-actions.js';

import ImageList from './image-list';


@connectToStores
class Images extends React.Component {

  static propTypes = {
    images: React.PropTypes.array,
    image: React.PropTypes.object,
    collection: React.PropTypes.object
  }

  static getStores() {
    return [ImageStore];
  }

  static getPropsFromStores() {
    return ImageStore.getState();
  }

  static getInitialState() {
    return ImageStore.getState();
  }

  constructor(props) {
    super(props);
    console.log(props);
    ImageActions.getImageList();
  }

  render() {
    const { images } = this.props;
    const { image } = this.props;

    return (
      <ImageList images={ images } collection={ this.props.collection } />
    );
  }
}

export default Images;