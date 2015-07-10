import React from 'react';
import Image from './image';

import classNames from 'classnames';

class ImageList extends React.Component {

  render() {
    const { selectedImages, images } = this.props;
    const classnames = classNames("image-list", this.props.className);

    let imageNodes = images.map((image, index) => {
      return (
        <Image image={image} key={index} />
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