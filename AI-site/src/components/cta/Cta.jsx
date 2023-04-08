import React from 'react'

const Cta = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-between p-[2rem] my-[4rem] mx-[2rem] lg:m-[4rem] rounded-[1rem] bg-gradient-to-tr from-purple-400 via-purple-600 to-red-400">
      <div className="gpt_cta-content">
        <p className="font-[500] leading-[30px] text-[12px] text-[#0e0e0e]">
          Request Early Access to Get Started
        </p>
        <h3 className="font-[800] leading-[32px] text-[22px] lg:leading-[45px] lg:text-[24px] text-[#000]">
          Register today & start exploring the endless possiblities.
        </h3>
      </div>
      <div className="flex justify-center items-center mt-[2rem] lg:mt-0 ml-[2rem] ">
        <button
          className="text-white rounded-[40px] text-[18px] font-semibold leading-[30px]  bg-black py-[0.5rem] px-[1rem] border-none outline-none min-w-[150px]"
          type="button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Cta