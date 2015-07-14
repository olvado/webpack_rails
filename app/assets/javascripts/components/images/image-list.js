import React from 'react';
import classNames from 'classnames';

import ImageActions from '../../actions/image-actions';
import CollectionActions from '../../actions/collection-actions';

import Image from './image';

class ImageList extends React.Component {

  static propTypes = {
    handleImageClick: React.PropTypes.func,
    collection: React.PropTypes.object
  }

  handleImageClick(image, event) {
    // ImageActions.getImage(image);
    CollectionActions.addImage(image);
  }


  render() {
    let { images } = this.props;
    let { image } = this.props;
    const classnames = classNames("image-list", this.props.className);

    let imageNodes = images.map((image, index) => {
      return (
        <Image image={image} key={index} handleImageClick={ this.handleImageClick.bind(this, image) } />
      );
    });

    return (
      <div className={ classnames }>
        {imageNodes}
      </div>
    );
  }
}

export default ImageList;