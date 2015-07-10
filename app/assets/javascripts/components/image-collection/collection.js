import $ from 'jquery';
import React from 'react';

import SelectedImages from './image-list';
import SelectableImages from './image-list';

class ImageCollection extends React.Component {

  state = {
    title: "Collection",
    selectedImages: [],
    selectableImages: []
  };

  getData() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.handleData(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  handleData(data) {
    const selectedImages = data.filter(function(image) {
      return image.selected == true
    });
    const selectableImages = data.filter(function(image) {
      return image.selected == false
    });
    this.setState({selectedImages: selectedImages});
    this.setState({selectableImages: selectableImages});
  }

  markSelected() {

  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { title } = this.state;

    return (
      <div className="image-collection">
        <h1>Images for { title }</h1>
        <div className="image-list-container">
          <SelectedImages images={ this.state.selectedImages } />
          <SelectableImages images={ this.state.selectableImages } data={ this.state.selectedImages } { ...this.state } />
        </div>
      </div>
    );
  }
}

export default ImageCollection;