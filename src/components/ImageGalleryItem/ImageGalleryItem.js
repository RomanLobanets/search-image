import React from 'react';

const ImageGalleryItem = ({ array, onClick }) => (
  <>
    {array.map(item => (
      <li
        key={item.id}
        onClick={() => onClick(item.largeImageURL)}
        className="ImageGalleryItem"
      >
        <img
          src={item.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    ))}
  </>
);
export default ImageGalleryItem;
