var React = require('react');
var Image = require('./image');

import classNames from 'classnames';

class ImageList extends React.Component {

  render() {
    const { images } = this.props;
    const handleClick = this.props.handleImageClick;
    const classnames = classNames("image-list", this.props.className);

    let imageNodes = images.map(function(image, index) {
      return (
        <Image name={image.name} key={index} handleClick={handleClick} />
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