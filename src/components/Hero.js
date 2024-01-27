import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
//import heroImg from '../images/web-dev.svg';

const Hero = () => {
    const comingSoonCourses = [
        "Web Development Masterclass",
        "JavaScript Fundamentals",
        "React for Beginners",
        "Node.js Essentials",
        "Responsive Design Techniques"
    ];

    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>

                <div className="m-auto overflow-hidden mx-4 mt-24 lg:mt-4 p-2 md:p-12 h-screen" data-aos="zoom-in">

                    <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            {/* Add "Coming Soon" banner */}
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                                Coming Soon
                            </h1>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            {/* Display the list of coming soon courses */}
                            <div className="text-left">
                                <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">Courses:</h1>
                                <ul className="list-disc pl-4">
                                    {comingSoonCourses.map((course, index) => (
                                        <li key={index} className="mb-2 text-lg">
                                            <span className="text-blue-900">{course}</span> - <Link to="/enroll" className="text-white bg-blue-900 hover:bg-blue-800 py-1 px-2 rounded-full">Enroll</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
