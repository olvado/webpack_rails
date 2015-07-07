var React = require('react');
var $ = require('jquery');

class Image extends React.Component {

  render() {
    const { props } = this;

    return (
      <figure className="image" onClick={ this.props.handleClick.bind(this) } >
        <figcaption>
          { props.name }
        </figcaption>
      </figure>
    );
  }
}

export default Image;