// Card.js
import React from 'react';

const Card = (props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-2">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={props.imageUrl} alt={props.imageAlt} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
