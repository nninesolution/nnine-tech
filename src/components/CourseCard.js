// CourseCard.js
import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-gray-200 rounded-lg p-3 mb-3 shadow-md flex items-center justify-between">
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{course.name}</h2>
            </div>
            <div>
                <a href={course.formLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white hover:bg-blue-700 font-semibold py-1 px-2 rounded-full text-center mr-2">
                    Enroll Now
                </a>
                <a href="#" className="bg-green-500 text-white hover:bg-green-700 font-semibold py-1 px-2 rounded-full text-center">
                    View Course Details
                </a>
            </div>
        </div>
    );
};

export default CourseCard;
