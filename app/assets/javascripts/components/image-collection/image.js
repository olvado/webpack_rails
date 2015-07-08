import React from 'react';
import classNames from 'classnames';


class Image extends React.Component {

  render() {
    const { data } = this.props;

    return (
      <figure className="image">
        { data.src }
        <figcaption>
          { data.name }
        </figcaption>
      </figure>
    );
  }
}

export default Image;