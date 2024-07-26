import React from 'react';

const ImageList = ({ record }) => {
  const images = record.params.imageUrls ? JSON.parse(record.params.imageUrls) : [];

  return (
    <div>
      {images.map((url, index) => (
        <img key={index} src={url} alt={`car-image-${index}`} width="50" height="50" />
      ))}
    </div>
  );
};

export default ImageList;
