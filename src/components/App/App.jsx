import { Div, ErrorStyled } from './App.styled';

import { fetchImages } from '../../api';
import { useEffect, useState } from 'react';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { GlobalStyled } from 'components/GlobalStyle';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getPages() {
      try {
        setIsLoading(true);
        setError(false);

        const searchRequest = await fetchImages(query, page);
        const { hits, totalHits } = searchRequest;

        setImages(prevImages => [...prevImages, ...hits]);
        setIsLoading(false);
        setTotalPages(Math.ceil(totalHits / 12));
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPages();
  }, [query, page]);

  const handleSubmit = newQuery => {
    if (!newQuery.trim()) return alert('Can not be empty');
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const isGallery = images.length !== 0;
  const isLoadMore = page < totalPages;

  return (
    <Div>
      <Searchbar onSubmit={handleSubmit} />
      {error && (
        <ErrorStyled>
          Oops! Something went wrong! Please try reloading this page!
        </ErrorStyled>
      )}
      {isGallery && <ImageGallery images={images} />}
      {isGallery && isLoadMore && <Button loadMore={handleLoadMore} />}
      <Loader isLoading={isLoading} />
      <GlobalStyled />
    </Div>
  );
};
