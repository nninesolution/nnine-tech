import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import CourseCard from './CourseCard';

const Hero = () => {
    const comingSoonCourses = [
        { name: "DevOps", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "AWS Solution Associate", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "AWS Developer Associate", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "RHEL", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "ORACLE", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "AWS Cloud Practitioner", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "Data Analytics and Machine Learning", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdzWTfMvyRM87jKpef0BMQE1FqSoMD3VK_rXQWj1h0wgOSV2Q/viewform?usp=sf_link" }
    ];

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const coursesToDisplay = showAll ? comingSoonCourses : comingSoonCourses.slice(0, 6);

    return (
        <div className="hero" id='hero'>
            <NavBar />
            <div className="m-auto mx-4 mt-24 lg:mt-4 p-2 md:p-12" data-aos="zoom-in">
                <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                    <div className="lg:w-1/2 flex flex-col justify-center items-center bg-blue-200 lg:bg-transparent py-8 rounded-lg" data-aos="zoom-in" data-aos-delay="200">
                        <div className="max-w-lg w-full p-8 bg-blue-900 text-white text-center rounded-lg">
                            <h1 className="text-3xl font-bold mb-4">Your N9 Solution Awaits</h1>
                            <p className="text-lg">Empower your future with our expert IT training and services.</p>
                        </div>
                        <br></br>
                        <div className="max-w-lg w-full p-8 bg-blue-900 text-white text-center rounded-lg">
                           <h1 className="text-3xl font-bold mb-4">Together</h1>
                            <p className="text-lg">Empowering Nepal's IT Industry through Training, Placement, and Innovation.</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                        <div className="text-left p-4">
                            <h1 className="mb-5 md:text-3xl text-2xl font-bold text-blue-900">Upcoming Classes:</h1>
                            <div>
                                {coursesToDisplay.map((course, index) => (
                                    <CourseCard key={index} course={course} />
                                ))}
                            </div>
                        </div>
                        {!showAll && (
                            <div className="text-center mt-4">
                                {comingSoonCourses.length > 6 && (
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleShowAll}>See More</button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="text-center mt-8">
                    {/* Additional content below courses if needed */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
