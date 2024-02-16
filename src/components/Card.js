import React from 'react';

const Card = (props) => {
  // Function to handle enrollment
  const handleEnrollNow = () => {
    // Navigate user to the corresponding Google Form URL for this card
    window.open(props.googleFormUrl, '_blank');
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-4"> {/* Adjusted max-w-xs */}
      <img src={props.imageUrl} alt={props.imageAlt} className="w-full h-32 object-cover" /> {/* Adjusted h-32 */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
        <div className="mt-4">
          {/*<p className="text-blue-900 text-base">Price: {props.price}</p>*/}
          <p className="text-green-900 text-base">Starting Date: {props.startDate}</p>
        </div>
      </div>
      <div className="px-6 py-4">
       <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
          onClick={handleEnrollNow} // Attach handleEnrollNow function to onClick event
        >
          View Details
        </button>
 
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
          onClick={handleEnrollNow} // Attach handleEnrollNow function to onClick event
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Card;
