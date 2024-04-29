import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import CourseCard from './CourseCard';

const Hero = () => {
    const [heroImage, setHeroImage] = useState("./awsonline.jpg"); // Initial image source
    const [hovered, setHovered] = useState(false);

    const comingSoonCourses = [
        { name: "DevOps", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "AWS Cloud Practitioner (Online Class)", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
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

    const changeHeroImage = (newImage) => {
        setHeroImage(newImage);
    };

    return (
        <div className="hero" id='hero'>
            <NavBar />
            <div className="m-auto mx-4 mt-24 lg:mt-4 p-2 md:p-12" data-aos="zoom-in">
                <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                    <div
                        className="lg:w-1/2 relative bg-blue-200 lg:bg-transparent py-8 rounded-lg overflow-hidden"
                        data-aos="zoom-in" data-aos-delay="200"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <img src={heroImage} alt="Hero" className="rounded-lg w-full" />
                        {hovered && (
                            <a href="https://forms.gle/ujSDDpW5ESqbrLNf9" target='_blank' className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-75 text-white text-2xl font-bold rounded-lg transition duration-300 ease-in-out">
                                Enroll Now
                            </a>
                        )}
                        <div className="max-w-lg w-full p-8 bg-blue-900 text-white text-center rounded-lg absolute bottom-0 left-0 transform translate-x-0 translate-y-full transition duration-300 ease-in-out">
                            <h1 className="text-3xl font-bold mb-4">Together</h1>

                            <p className="text-lg">Empowering Nepal's IT Industry through Training, Placement, and Innovation.</p>
                        </div>
                        <div className="max-w-lg w-full p-8 bg-blue-900 text-white text-center rounded-lg absolute bottom-0 left-0 transform translate-x-0 translate-y-full transition duration-300 ease-in-out">
                            <p className="text-sm mt-2">
                            🔗 Register Here: https://forms.gle/7EpqaZr8ER23gz596</p>
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
