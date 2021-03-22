import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ gallery }) => (
  <ul className="ImageGallery">
    {gallery.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
    ))}
  </ul>
);

export default ImageGallery;
