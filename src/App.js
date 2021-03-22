import React, { Component } from 'react';
import getFetch from './services/apiPixabay';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    sQuery: '',
    page: 1,
    perPage: 12,
    gallery: [],
    isLoading: false,
    error: null,
    scroll: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sQuery !== this.state.sQuery) {
      this.fetchHits();
    }
    if (this.state.scroll === true) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onChangeQuery = query => {
    this.setState({
      sQuery: query,
      page: 1,
      gallery: [],
      error: null,
    });
  };

  fetchHits = () => {
    const { page, sQuery, perPage } = this.state;
    const options = { sQuery, page, perPage };

    this.setState({ isLoading: true });

    getFetch(options)
      .then(gallery => {
        console.log(gallery);
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...gallery],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  loadMoreButton = () => {
    this.fetchHits();
    if (this.state.page > 1) {
      this.setState({ scroll: true });
    }
  };

  render() {
    const { gallery, isLoading } = this.state;
    const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery gallery={gallery} />
        {shouldRenderLoadMoreButton && <Button onClick={this.loadMoreButton} />}
      </>
    );
  }
}

export default App;
