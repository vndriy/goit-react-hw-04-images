import { Component } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import { ImgItem, ImgSrc } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { imgPreviewUrl, largeImg, id, tags } = this.props;

    return (
      <>
        <ImgItem key={id} onClick={this.handleModal}>
          <ImgSrc src={imgPreviewUrl} alt={tags} />
        </ImgItem>
        <ModalWindow
          modalIsOpen={this.state.isModalOpen}
          closeModal={this.handleModal}
          largeImg={largeImg}
        />
      </>
    );
  }
}
