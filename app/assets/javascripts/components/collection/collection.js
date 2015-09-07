import React from 'react';
import connectToStores from 'alt/utils/connectToStores';

import ImageStore from '../../stores/image-store.js';
import ImageActions from '../../actions/image-actions.js';

import ImageList from '../images/image-list';

@connectToStores
class Collection extends React.Component {

  static propTypes = {
    updateUrl: React.PropTypes.string,
    collectionId: React.PropTypes.string,
    imagesUrl: React.PropTypes.string,
    selectedImages: React.PropTypes.array,
    selectableImages: React.PropTypes.array
  }

  static getStores() {
    return [ImageStore];
  }

  static getPropsFromStores() {
    return ImageStore.getState();
  }

  static getInitialState() {
    return ImageStore.getState();
  }

  constructor(props) {
    super(props);
    ImageActions.getImages(props.imagesUrl);
  }

  handleSelectedClick(image) {
    ImageActions.unselectImage(image);
  }

  handleSelectableClick(image) {
    ImageActions.selectImage(image);
  }

  handleSave(e) {
    e.preventDefault();
    ImageActions.updateImages(this.props.updateUrl, this.props.selectedImages);
  }

  render() {
    let { selectedImages, selectableImages } = this.props;
    return (
      <div className="collection-images">
        <h1>Images</h1>
        <button onClick={ this.handleSave.bind(this) }>Save Changes</button>
        <div className="image-list-container">
          <ImageList 
            images={ selectedImages } 
            handleImageClick={ this.handleSelectedClick.bind(this) } 
            handlePosition={ true } />
          <ImageList 
            images={ selectableImages } 
            handleImageClick={ this.handleSelectableClick.bind(this) } />
        </div>
      </div>
    );
  }
}

export default Collection;
