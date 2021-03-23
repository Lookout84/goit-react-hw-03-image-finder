import React, { Component } from 'react';
import getFetch from './services/apiPixabay';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

import Modal from './components/Modal/Modal';
 

class App extends Component {
  state = {
    sQuery: '',
    page: 1,
    perPage: 12,
    gallery: [],
    isLoading: false,
    error: null,
    scroll: false,
    showModal: false,
    largeImageURL: null,
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

    this.setState({ isLoading: true });

    getFetch(sQuery, page, perPage)
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getLargeImageURL = (largeImageURL) => {
    this.toggleModal();
    this.setState({ largeImageURL });
  };

  render() {
    const { gallery, isLoading, showModal } = this.state;
    const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;
    return (
      <>
      {showModal && (
              <Modal toggleModal={this.toggleModal} getLargeImageURL={this.getLargeImageURL}> 
              </Modal>
            )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery gallery={gallery} />
        {shouldRenderLoadMoreButton && <Button onClick={this.loadMoreButton} />}
      </>
    );
  }
}

export default App;
