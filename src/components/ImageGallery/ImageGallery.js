import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

export default class ImageGallery extends Component {
  handleClick = (largeImageURL) => {
    this.props.onClose(largeImageURL);
  };

  render() {
    const { gallery } = this.props;
    return (
      <ul className={s.ImageGallery}>
        {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onClick={() => this.handleClick(largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};
