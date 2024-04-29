import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../Navbar/NavLinks';
const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setisOpen] = useState(false);

    function handleClick() {
        setisOpen(!isOpen);
    }

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-1">
                <div className="flex flex-row justify-left md:px-12 md:mx-12 items-center text-center font-semibold">
                    <Link to="/"> <img src={`${process.env.PUBLIC_URL}/logo1.png`} alt="N9 Solution Logo" className="h-10 w-auto" /></Link>
                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <ul className={`lg:flex lg:flex-row lg:space-x-6 lg:p-5 ${isOpen ? 'block' : 'hidden'} absolute top-16 right-0 bg-white lg:relative lg:bg-transparent lg:top-auto lg:right-auto lg:w-auto`}>
                        <NavLinks />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
