import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
        <Link className="text-white bg-red-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/contactus">
        <div className="flex items-center">
            {/* Search box */}
            <div className="relative mr-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="p-2 pl-8 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <svg
                    className="h-5 w-5 absolute top-2 left-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M8.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM18 19.207L15.207 16.5A9.5 9.5 0 1 0 16.5 18L19.207 20l.707-.707z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            </div>
            </Link>
            <Link className="text-white bg-red-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/get-demo">
                Demo our products
            </Link>
            <HashLink className="text-white bg-red-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/about">
                About
            </HashLink>
            <HashLink className="text-white bg-red-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/#services">
                Services
            </HashLink>
         {/*   <HashLink className="text-white bg-red-900 hover:bg-Red-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/#portfolio">
                Portfolio
    </HashLink> */}
             <HashLink className="text-white bg-red-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/contact">
                Contact Us
    </HashLink> 
            <HashLink className="text-white bg-red-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/signin">
                SignIn/SignUp
            </HashLink>
        </>
    )
}

export default NavLinks;