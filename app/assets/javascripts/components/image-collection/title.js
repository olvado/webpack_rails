var React = require('react');
var $ = require('jquery');

class Title extends React.Component {


  static propTypes = {
    name: React.PropTypes.string
  }

  render() {
    console.log(this.props.name);
    return (
      <h1>
          Images for { this.props.name }
      </h1>
    );
  }
}

export default Title;