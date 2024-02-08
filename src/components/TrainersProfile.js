// TrainerProfile.js
import React from 'react';

const TrainerProfile = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-8">
      <img src={props.imageUrl} alt={props.imageAlt} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>
    </div>
  );
};

export default TrainerProfile;
