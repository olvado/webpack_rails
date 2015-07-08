import React from 'react';
import Image from './image';

import classNames from 'classnames';

class ImageList extends React.Component {

  render() {
    const { selectedImages, images } = this.props;
    const classnames = classNames("image-list", this.props.className);

    let imageNodes = images.map(function(image, index) {
      return (
        <Image data={image} key={index} />
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