import '../../App.css'

import {
  Typography,
  Card,
} from "@material-tailwind/react";

const Hero = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-screen-md py-12">
         <Card className="mb-12 overflow-hidden rounded-xl">
           <img
             alt="nature"
             className="h-[32rem] w-full object-cover object-center"
             src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
           />
         </Card>
         <Typography variant="h2" color="blue-gray" className="mb-2">
           Dear Jeju, “Thank You!” 
         </Typography>
         <Typography color="gray" className="font-normal">
           Welcome to our community service website! We are a group of individuals dedicated 
           to making a positive impact in our community through various service projects and events. 
           Whether you are an individual looking to get involved and give back, or an organization 
           seeking volunteers for your cause, we hope to connect you with opportunities to make a 
           difference. We collaborate with BHA and SJA to help protect the environment on Jeju Island. 
           Together, we address environmental issues such as pollution by combining resources. 
           Whether through cleanups, tree planting, or educational campaigns, we work to raise 
           awareness and drive sustainable change in the community. Our community service group 
           stands out by collaborating with other organizations, prioritizing education and 
           awareness, and using an online store to raise funds. We are a group of individuals 
           dedicated to making a positive impact in our community through various service projects 
           and events. 
         </Typography>
       </div>
      {/* JOIN US NOW */}
      <section className="w-screen lg:py-12 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div className="h-64 bg-cover lg:h-full">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="image" className="" />
            </div>
          </div>
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
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