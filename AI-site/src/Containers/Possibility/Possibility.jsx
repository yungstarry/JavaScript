import React from 'react'
import possibilityimg from '../../Img/possibility.png'

const Possibility = () => {
  return (
    <div
      className="flex flex-col lg:flex-row py-[2rem] px-[2rem] lg:py-[4rem] lg:px-[6rem]"
      id="possibility"
    >
      <div className="flex flex-1 justify-start items-center mr-[2rem]">
        <img className="w-full h-full my-[1rem]" src={possibilityimg} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-end">
        <h4 className="text-[#71e5ff] leading-[30px] font-[500]">
          Request Early Access to Get Started
        </h4>
        <h1 className="my-[1rem] text-[34px] leading-[45px] font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          The possibilities are beyond your imagination
        </h1>
        <p className='leading-[30px] text-[#81afdd] mb-[2rem]'>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 className="text-[#ff8a71] leading-[30px] font-[500] ">
          Request Early Access to Get Started
        </h4>
      </div>
    </div>
  );
}

export default Possibility