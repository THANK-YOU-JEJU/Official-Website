import React from 'react'

const Hero = () => {
  return (
    <div className="">
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

      {/* JOING US NOW */}
      <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div className="h-64 bg-cover lg:h-full">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="image" className="" />
            </div>
          </div>
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Join Us <span className="text-blue-500">Now</span>
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              We are a group of individuals dedicated to making a positive impact in our community through various service projects and events. Whether you are an individual looking to get involved and give back, or an organization seeking volunteers for your cause, we hope to connect you with opportunities to make a difference.
            </p>
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <a href="./pages/Register.html" className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero