import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';

const Hero = () => {    
    const handleEnrollNowClick = () => {
        // Redirect to Google Form registration page
        window.open('https://forms.gle/in86LKYEFJRimao1A', '_blank');
    };

    const [heroImage, setHeroImage] = useState("./awsonline.jpg"); // Initial image source
    const [hovered, setHovered] = useState(false);

    const comingSoonCourses = [
        { name: "DevOps", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "AWS Cloud Practitioner (Online Class)", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        // Other courses
    ];

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const coursesToDisplay = showAll ? comingSoonCourses : comingSoonCourses.slice(0, 6);

    const changeHeroImage = (newImage) => {
        setHeroImage(newImage);
    };
    
    return (
        <>
            <br />
            <br />
            <br />
            <NavBar />
            <div className="w-screen h-screen text-white" style={{ background: "#5184d6" }}>
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:flex-row">
                    <div className="text-center lg:w-1/2">
                        <div className="ml-6">
                            <h1 className="my-4 text-5xl font-bold leading-tight">
                                Welcome to Nnine Training Center
                            </h1>
                            <p className="text-2xl mb-8">
                                Enroll now and get discount up 40% on the occasion on New Year 2081.
                            </p>
                            <button
                                onClick={handleEnrollNowClick}
                                className="hover:bg-red-200 bg-white text-gray-800 font-bold rounded-full py-4 px-8"
                            >
                                Enroll Now
                            </button>
                            {/* Add missing closing div tag */}
                        </div>
                    </div>
                    {/* Add missing closing div tag */}
                </div>
            </div>
        </>
    );
};

export default Hero;
