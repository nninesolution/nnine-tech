import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <Link className="text-white bg-red-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/get-demo">
                Demo our products
            </Link>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/about">
                About
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/#portfolio">
                Portfolio
            </HashLink>
             <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/contact">
                Contact Us
    </HashLink> 
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/signin">
                SignIn/SignUp
            </HashLink>
        </>
    )
}

export default NavLinks;