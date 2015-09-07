import React from 'react';
import classNames from 'classnames';
import ImageActions from '../../actions/image-actions';

class Image extends React.Component {

  static propTypes = {
    image: React.PropTypes.object,
    handleImageClick: React.PropTypes.func,
    handlePosition: React.PropTypes.bool,
    position: React.PropTypes.number
  }

  handlePositionClick(positions, e) {
    e.preventDefault();
    e.stopPropagation();
    ImageActions.updatePosition(positions);
  }

  render() {
    let { image, handlePosition } = this.props;
    const classnames = classNames("image-list", this.props.className);
    return (
      <figure className="image" onClick={ this.props.handleImageClick } >
        <img src={ image.file_src } />
        <figcaption>
          { image.title }
          { handlePosition && (
              <span className="buttons">
                <button onClick={ this.handlePositionClick.bind(this, {
                    oldPosition: this.props.position,
                    newPosition: this.props.position - 1
                  }) } >Up</button>
                <button onClick={ 
                  this.handlePositionClick.bind(this, {
                    oldPosition: this.props.position,
                    newPosition: this.props.position + 1
                  }) } >Down</button>
              </span>
            )}
        </figcaption>
      </figure>
    );
  }
}

export default Image;
