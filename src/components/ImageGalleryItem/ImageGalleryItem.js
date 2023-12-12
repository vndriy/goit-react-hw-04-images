import { useState } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import { ImgItem, ImgSrc } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imgPreviewUrl, largeImg, id, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  return (
    <>
      <ImgItem key={id} onClick={handleModal}>
        <ImgSrc src={imgPreviewUrl} alt={tags} />
      </ImgItem>
      <ModalWindow
        modalIsOpen={isModalOpen}
        closeModal={handleModal}
        largeImg={largeImg}
      />
    </>
  );
};
