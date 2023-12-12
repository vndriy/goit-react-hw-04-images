import { Div, ErrorStyled } from './App.styled';

import { fetchImages } from '../../api';
import { Component } from 'react';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { GlobalStyled } from 'components/GlobalStyle';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: false,
    totalPages: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, error: false });
        const searchRequest = await fetchImages(query, page);

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...searchRequest.hits],
            isLoading: false,
            totalPages: Math.ceil(searchRequest.totalHits / 12),
          };
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = newQuery => {
    if (!newQuery.trim()) return alert('Can not be empty');
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { isLoading, images, error, page, totalPages } = this.state;
    const isGallery = images.length !== 0;
    const isLoadMore = page < totalPages;
    return (
      <Div>
        <Searchbar onSubmit={this.handleSubmit} />
        {error && (
          <ErrorStyled>
            Oops! Something went wrong! Please try reloading this page
          </ErrorStyled>
        )}
        {isGallery && <ImageGallery images={images} />}
        {isGallery && isLoadMore && <Button loadMore={this.handleLoadMore} />}
        <Loader isLoading={isLoading} />
        <GlobalStyled />
      </Div>
    );
  }
}
