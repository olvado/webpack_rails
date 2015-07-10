import React from 'react';
import classNames from 'classnames';

class Image extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <figure className="image">
        { image.src }
        <figcaption>{ image.name }</figcaption>
      </figure>
    );
  }
}

export default Image;