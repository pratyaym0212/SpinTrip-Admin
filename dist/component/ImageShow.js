import React from 'react';

const ImageShow = ({ record }) => {
  const images = record.params.imageUrls ? JSON.parse(record.params.imageUrls) : [];

  return (
    <div>
      {images.map((url, index) => (
        <img key={index} src={url} alt={`car-image-${index}`} width="100" height="100" />
      ))}
    </div>
  );
};

export default ImageShow;
