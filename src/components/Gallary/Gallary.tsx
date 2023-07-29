import React from 'react'
import avatar1 from '/assets/avatar1.jpg'
import avatar2 from '/assets/avatar2.jpg'
import avatar3 from '/assets/avatar3.jpg'
import avatar4 from '/assets/avatar4.jpg'
import avatar5 from '/assets/avatar5.jpg'
import avatar6 from '/assets/avatar6.jpg'

const images = [
  [avatar1, avatar2, avatar3],
  [avatar4, avatar5, avatar6],
]

const renderImages = () => { 
  return images.map((row) => {
    return (
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img className="w-full object-cover h-full object-center block rounded-2xl" src={row[0]}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img className="w-full object-cover h-full object-center block rounded-2xl" src={row[1]}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img className="w-full object-cover h-full object-center block rounded-2xl" src={row[2]}/>
        </div>
      </div>
    );
  })
}

const Gallary = () => {
  return (
    <main>
      <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap md:-m-2 -m-1">
              {renderImages()}
            </div>
          </div>
      </section>
    </main>
  )
}

export default Gallary