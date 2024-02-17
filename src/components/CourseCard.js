// CourseCard.js
import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-gray-100 rounded-lg p-2 mb-2 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="md:w-2/3">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{course.name}</h2>
                </div>
                <div className="md:w-1/3 md:text-right md:mt-0 mt-2">
                    <a href={course.formLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white hover:bg-blue-700 font-semibold py-1 px-2 rounded-full inline-block md:mr-2 mb-2 md:mb-0">
                        Enroll Now
                    </a>
                    <a href="#" className="bg-green-500 text-white hover:bg-green-700 font-semibold py-1 px-2 rounded-full inline-block">
                        View
                    </a>
                </div>

            </div>
        </div>
    );
};

export default CourseCard;
