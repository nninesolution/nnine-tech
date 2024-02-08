import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
        <Link className="text-black hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl" smooth to="/contactus">
            </Link>
            <HashLink className="text-black hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl" smooth to="/about">
                About
            </HashLink>
            <HashLink className="text-black hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl" smooth to="/cardlist">
                Popular Courses
            </HashLink>
            <HashLink className="text-black hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl" smooth to="/trainers">
                Trainers
            </HashLink>
             <HashLink className="text-black hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl" smooth to="/contact">
                Contact Us
    </HashLink> 
        </>
    )
}

export default NavLinks;