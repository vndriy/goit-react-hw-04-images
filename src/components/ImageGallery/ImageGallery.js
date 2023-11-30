import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(item => (
        <ImageGalleryItem
          key={item.id}
          imgPreviewUrl={item.webformatURL}
          tags={item.tags}
          largeImg={item.largeImageURL}
        />
      ))}
    </GalleryList>
  );
};
