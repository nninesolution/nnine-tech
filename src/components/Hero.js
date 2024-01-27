import React from 'react';
//import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/comingsoon.jpg'; 

const Hero = () => {
    const comingSoonCourses = [
        { name: "DevOps", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "AWS Solution Associate", formLink: "https://docs.google.com/forms/d/e/1FAIpQLScfpMOlQksn6qyIQtHo4Eknbni88NXpFnBl56bEVchhFB53tg/viewform?usp=sf_link" },
        { name: "AWS Developer Associate", formLink: "https://docs.google.com/forms/d/e/1FAIpQLScoazEGOKT9Za3PRlKq6casljxztZYNg8-tOcbrGeJCtXIi2Q/viewform?usp=sf_link" },
        { name: "RHEL", formLink: "Lhttps://docs.google.com/forms/d/e/1FAIpQLSfpQ-jJxF2LfCa3nm2nEaY8xEg1wmphzqzZksBzzivJSvjojg/viewform?usp=sf_link" },
        { name: "ORACLE", formLink: "Lhttps://docs.google.com/forms/d/e/1FAIpQLScoazEGOKT9Za3PRlKq6casljxztZYNg8-tOcbrGeJCtXIi2Q/viewform?usp=sf_link" }
    ];

    return (
        <div className="hero" id='hero'>
            <div>
                <NavBar />
            </div>

            <div className="m-auto overflow-hidden mx-4 mt-24 lg:mt-4 p-2 md:p-12 h-screen" data-aos="zoom-in">
                <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                    <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                        {/*<h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                            Coming Soon
    </h1>*/}
                        <img src={heroImg} alt="Coming Soon Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                        <div className="text-left">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">Courses:</h1>
                            <ul className="list-disc pl-4">
                                {comingSoonCourses.map((course, index) => (
                                    <li key={index} className="mb-2 text-lg">
                                        <span className="text-blue-900">{course.name}</span> - {' '}
                                        <a href={course.formLink} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-900 hover:bg-blue-800 py-1 px-2 rounded-full">
                                            Enroll Now
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                    {/* Image below "Coming Soon" text */}
                        <div className="text-center mt-8">
                        <img src={heroImg} alt="Coming Soon Illustration" style={{ maxWidth: '100%', height: 'auto' }} />

                </div>

            </div>
        </div>
    );
};

export default Hero;
