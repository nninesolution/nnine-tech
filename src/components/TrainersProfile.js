import React, { useState } from 'react';

const TrainerProfile = (props) => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="w-full h-auto cursor-pointer"
        style={{ height: '200px' }}
        onClick={handleImageClick}
      />
      {isImageClicked && (
        <div
          className="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-75"
          onClick={handleImageClick}
        >
          <img src={props.imageUrl} alt={props.imageAlt} className="max-w-full max-h-full" />
        </div>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>
    </div>
  );
};

export default TrainerProfile;
