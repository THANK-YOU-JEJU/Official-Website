import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="relative py-32 w-full h-full">
      <div className="absolute top-0 justify items-center mx-auto justify-center object-none w-screen h-full">
        <span className="w-screen h-full absolute opacity-75 bg-black"></span>
        <img src="https://i1.wp.com/www.korvia.com/wp-content/uploads/2012/07/image-facebook-jeju-island-beach-guide-cover.jpg?fit=1200%2C628&ssl=1" alt="image" className="mx-auto w-screen h-full" />
      </div>
      <div className="relative w-screen lg:px-32 md:px-20 sm:px-8">
        <div className="flex flex-wrap w-full mx-auto text-center justify-center">
          <h1 className="text-white font-shadows text-5xl">
            Dear Jeju, “Thank You!” 
          </h1>
          <p className="mt-4 text-lg text-gray-300 font-andika">
            Welcome to our community service website! We are a group of individuals dedicated to making a positive impact in our community through various service projects and events. Whether you are an individual looking to get involved and give back, or an organization seeking volunteers for your cause, we hope to connect you with opportunities to make a difference.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero