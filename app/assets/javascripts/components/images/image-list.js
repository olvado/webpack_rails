import React from 'react';
import classNames from 'classnames';

import ImageActions from '../../actions/image-actions';

import Image from './image';

class ImageList extends React.Component {

  static propTypes = {
    handleImageClick: React.PropTypes.func,
    images: React.PropTypes.array,
    handlePosition: React.PropTypes.bool
  }

  handlePositionClick(newPosition) {
    console.log(newPosition);

  }

  render() {
    let { images, handlePosition } = this.props;
    const classnames = classNames("image-list", this.props.className);
    return (
      <div className={ classnames }>
        { images &&
          (images.map((image, index) => {
              return (
                <Image 
                  image={image} 
                  key={index} 
                  handleImageClick={ this.props.handleImageClick.bind(this, image) } 
                  handlePosition={ handlePosition } 
                  position={index}
                  handlePositionClick={ this.handlePositionClick.bind(this, index) } />
              );
            }))
        }
      </div>
    );
  }
}

export default ImageList;