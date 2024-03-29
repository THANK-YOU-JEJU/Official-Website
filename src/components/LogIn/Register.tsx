
const Register = () => {
  return (
    <div>
     <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-r from-cyan-300 to-blue-200">
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h2 className="mb-12 text-center text-5xl font-extrabold">SignUp</h2>
    <form>
      <div className="mb-4">
        <label className="block mb-1" >Email-Address</label>
        <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div className="mb-4"> 
        <label className="block mb-1" >Password</label>
        <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember_me" type="checkbox" className="border border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          <label  className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition">Sign In</button>
      </div>
    </form>
  </div>
    </div>
  </div>
  )
}

export default Register