import React from 'react'
import people from '../../Img/people.png'
import ai from '../../Img/ai.png'

function Header() {
  return (
    <div
      className=" flex flex-col lg:flex-row py-[2rem] px-[2rem] lg:py-[4rem] lg:px-[6rem]"
      id="home"
    >
      <div className=" flex-1 flex flex-col items-start mr-[3rem]  lg:mr-[5rem]">
        <h1 className=" leading-[60px] text-[48px] md:leading-[62px] md:text-[62px] font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-[16px] text-[#81AFDD] leading-[24px] md:leading-[27px] md:text-[20px] mt-5">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className=" w-full mt-[2rem] ml-0 mb-[1rem] flex ">
          <input
            className="bg-[#031B34] rounded-l text-[16px] md:text-[20px] leading-[24px] md:leading-[27px] text-[#3d6184] flex-[2] w-full min-h-[50px] border-2 border-solid border-[#052d56] outline-none px-[1rem]"
            type="email"
            placeholder="Your Email Address"
          />
          <button
            className="text-white flex-[0.6] bg-[#FF4820] rounded-r text-[12px] md:text-[20px] leading-[16px]  md:leading-[20px] min-h-[50px] outline-none px-[1rem] border-none"
            type="button"
          >
            Get Started
          </button>
        </div>
        <div className="w-full flex  flex-col md:flex-row justify-start items-center m-0 md:mt-[2rem]">
          <img className="w-[181.79px] h-[38px]" src={people} alt="" />
          <p className="text-white ml-[1rem] text-[12px] text-center">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="flex-[1] flex justify-center items-center">
        <img className="w-full h-full " src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header