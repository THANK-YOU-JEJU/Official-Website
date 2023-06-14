import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"

const Nav = () => {
  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#">
            THANK YOU JEJU
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <i className="text-white"></i>
          </button>
        </div>
        <div className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden">
          <ul className="flex flex-col lg:flex-row  lg:px-6 list-none lg:ml-auto">
            <li className="flex items-center">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800 lg:text-gray-300" href="#">
                About Us
              </a>
            </li>
            <li className="flex items-center">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800 lg:text-gray-300" href="#">
                Gallery
              </a>
            </li>
            <li className="flex items-center">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800 lg:text-gray-300" href="#">Shop</a>
            </li>
            <li className="flex items-center">
              <a 
                className="lg:text-white lg:hover:text-gray-300 px-3 py-4 lg:py-2 flex items-center"
                href="https://www.instagram.com/thankyoujeju_gec/"
              >
                <AiOutlineInstagram />
              </a>
            </li>
            <li className="flex items-center ">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://github.com/oculit-dev"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="flex items-center justify-between">
              <button 
                className="inline-flex w-full sm:w-auto" 
                type="button"
                onClick={() => {
                  window.open("https://forms.gle/5Uj6Jg5K1aC4J7ZP9", "_blank")
                }}
              >
                <a href="#" className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3">
                  <i className="">Register Now</i>
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav