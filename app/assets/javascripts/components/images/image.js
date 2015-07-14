import React from 'react';
import classNames from 'classnames';

class Image extends React.Component {
  
  static propTypes = {
    image: React.PropTypes.object,
    handleImageClick: React.PropTypes.func
  }

  render() {
    let { image } = this.props;
    const classnames = classNames("image-list", this.props.className);
    return (
      <figure className="image" onClick={ this.props.handleImageClick } >
        <img src={ image.file_src } />
        <figcaption>
          { image.title }
        </figcaption>
      </figure>
    );
  }
}

export default Image;
