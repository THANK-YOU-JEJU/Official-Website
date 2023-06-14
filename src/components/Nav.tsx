import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className=" w-screen flex flex-wrap items-center justify-around py-8 px-10 bg-slate-200">
        <div className="">
          (logo)
        </div>
        <div className='justify-between flex'>
          <div className='mx-10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:underline'>
            About Us
          </div>
          <div className="mx-10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:underline">
            Environmental Issues
          </div>
          <div className="mx-10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:underline">
            Gallery
          </div>
        </div>
        <div className="justify-between flex">
          <div className='px-2'>
            Login
          </div>
          <div>
            |
          </div>
          <div className='px-2'>
            SignUp
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav