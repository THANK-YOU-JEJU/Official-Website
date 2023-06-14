import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        href="#">THANK YOU JEJU</a>
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                    >
                        <i className="text-white fas fa-bars"></i>
                    </button>
                </div>
            <div
            className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
            id="example-collapse-navbar">
                <ul className="flex flex-col lg:flex-row  lg:px-6 list-none lg:ml-auto">
                    <li className="flex items-center">
                        <a
                            className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://github.com/oculit-dev">
                            
                            <a
                                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800 lg:text-gray-300"
                                href="#">About Us</a>
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                            className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://github.com/oculit-dev">
                            
                            <a
                                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800 lg:text-gray-300"
                                href="#">Gallery</a>
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                            className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://github.com/oculit-dev">
                            
                            <a
                                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800 lg:text-gray-300"
                                href="#">Shop</a>
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                            className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://www.instagram.com/thankyoujeju_gec/">

                            <i className="lg:text-gray-300 text-gray-500 fab fa-instagram text-lg leading-lg "></i>
                            <span className="lg:hidden inline-block ml-2">Instagram</span>
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                            className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://github.com/oculit-dev">

                            <i className="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "></i>
                            <span className="lg:hidden inline-block ml-2">Star</span>
                        </a>
                    </li>
                    <li className="flex items-center justify-between">
                        <li className="flex items-center justify-between">
                            <div className="inline-flex w-full sm:w-auto">
                                <a href="#" className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3">
                                    <i className=""></i> Register Now
                                </a>
                            </div>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Nav