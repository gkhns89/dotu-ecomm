import React from 'react'

function Fluid() {
  return (
    <section className="flex flex-col justify-between md:justify-center items-center mt-32 md:mt-0 md:flex-row-reverse">
    <div className="flex flex-col justify-between items-center md:items-start gap-8 md:min-w-[570px]">
      <div className="text-center max-w-64 md:max-w-sm md:text-left">
        <h5 className="font-bold text-txt-g2">SUMMER 2024</h5>
        <h2 className='font-bold'>Part of the Neural Universe</h2>
        <h4 className="text-txt-g">
          We know how large objects will act, but things on a small scale.
        </h4>
      </div>
      <div className="flex flex-col justify-between items-center gap-4 md:flex-row">
        <button className="bg-c4 min-w-44 text-txt-b px-10 py-4 text-sm font-bold border border-c4 rounded-md">BUY NOW</button>
        <button className="text-txt-b min-w-44 px-10 py-4 text-sm font-bold rounded-md border border-c4">Learn More</button>
      </div>
    </div>
    <div className="flex items-center md:max-w-[1025px]">
      <img
        src="../images/Fluid.png"
        className="md:min-w-[725px] object-cover"
        alt="hero"
      />
    </div>
  </section>
  )
}

export default Fluid