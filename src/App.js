import React, { Component } from "react";
import getFetch from "./services/apiPixabay";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";

class App extends Component {
  state = {
    sQuery: "",
    page: 1,
    perPage: 12,
    gallery: [],
    isLoading: false,
    error: false,
    scroll: false,
    showModal: false,
    largeImageURL: "",
    tags: "",
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sQuery !== this.state.sQuery) {
      this.fetchHits();
    }
    if (this.state.scroll === true) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      sQuery: query,
      page: 1,
      gallery: [],
    });
  };

  fetchHits = () => {
    const { page, sQuery, perPage } = this.state;

    this.setState({ isLoading: true });

    getFetch(sQuery, page, perPage)
      .then((gallery) => {
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...gallery],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  loadMoreButton = () => {
    this.fetchHits();
    if (this.state.page > 1) {
      this.setState({ scroll: true });
    }
  };

  toggleModal = (largeImageURL, tags) => {
    this.setState({ tags: tags });
    this.setState({ largeImageURL: largeImageURL });
    this.setState({ scroll: false });
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const {
      gallery,
      isLoading,
      error,
      showModal,
      largeImageURL,
      tags,
    } = this.state;
    const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;
    return (
      <>
        {error && <p>Sorry, error</p>}
        <Searchbar onSubmit={this.onChangeQuery} />
        {gallery.length > 0 && (
          <ImageGallery gallery={gallery} onClose={this.toggleModal} />
        )}
        {isLoading && <Loader />}

        {shouldRenderLoadMoreButton && <Button onClick={this.loadMoreButton} />}

        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </>
    );
  }
}

export default App;
