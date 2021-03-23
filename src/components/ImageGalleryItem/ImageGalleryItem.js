import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, webformatURL, tags, onClick }) => {
  return (
    <>
      <li key={id} className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={onClick}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  tags: PropTypes.string,
};
