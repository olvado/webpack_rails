var React = require('react');
var $ = require('jquery');

var CollectionTitle = require('./title');
var ImageList = require('./image-list');

class ImageCollection extends React.Component {

  static propTypes = {
    url: React.PropTypes.string
  }

  state = {
    data: {},
    collection_name: "",
    collection_images: [],
    images: []
  };

  loadDataFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ data: data });
        this.setState({ collection_name: data.collection.name });
        this.setState({ collection_images: data.collection.images });
        this.setState({ images: data.images });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  sendDataToServer() {
    console.log('Send data to the server');
  }

  componentDidMount() {
    this.loadDataFromServer();
  }

  handleImageClick(e) {
    console.log(e);
  }

  handleButtonClick(e) {
    console.log(e);
    this.sendDataToServer();
  }

  handleDeleteClick() {
    console.log(this);
    this.setState({collection_images: this.state.images})
  }

  render() {
    const { data } = this.state

    return (
      <div className="image-collection">
        <CollectionTitle name={ this.state.collection_name } />
        <button onClick={ this.handleButtonClick.bind(this) }>Click me</button>
        <div className="image-list-container">
          <ImageList images={ this.state.collection_images } data={data} className="image-list--collection" handleImageClick={this.handleImageClick.bind(this)} />
          <ImageList images={ this.state.images } data={data} className="image-list--images" handleImageClick={this.handleImageClick.bind(this)} />
        </div>
        <button onClick={ this.handleDeleteClick.bind(this) }>Delete</button>
      </div>
    );
  }
}

export default ImageCollection;