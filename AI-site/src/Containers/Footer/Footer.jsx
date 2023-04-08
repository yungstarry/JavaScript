import React from "react";
import gpt3logo from "../../Img/logo.svg";

const Footer = () => {
  return (
    <div className=" gpt3_footer py-[2rem] px-[2rem] lg:py-[4rem] lg:px-[6rem] flex flex-col justify-center items-center bg-[#031B34]">
      <div className="gpt3_footer-heading w-full text-center mb-[3rem]">
        <h1 className="my-[1rem] text-[34px] leading-[45px] lg:text-[62px] lg:leading-[75px] font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          Do you want to step in to the future before others
        </h1>
        <div className="gpt3_footer-btn flex justify-center items-center text-center mb-[10rem]">
          <button className="text-white border-solid border-2 border-white text-[18px] leading[21] p-3">
            Request Early Access
          </button>
        </div>
      </div>
      <div className="gpt3__footer_links text-white flex justify-between flex-row flex-wrap items-start  w-full text-left">
        <div className="gpt3__ footer_links_logo flex flex-col w-[250px] m-[1rem] ">
          <img
            className="w-[118px] h-[30px] mb-[1rem]"
            src={gpt3logo}
            alt="logo"
          />
          <p className="text-sm">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="gpt3_footer-links-div w-[250px] m-[1rem] flex flex-col justify-start">
          <h4 className="font-bold mb-4">Links</h4>
          <p className="text-[12px] leading-[14px] my-[0.5rem] cursor-pointer">
            Overons
          </p>
          <p className="text-[12px] leading-[14px] my-[0.5rem] cursor-pointer">
            Social Media
          </p>
          <p className="text-[12px] leading-[14px] my-[0.5rem] cursor-pointer">
            Counters
          </p>
          <p className="text-[12px] leading-[14px] my-[0.5rem] cursor-pointer">
            Contact
          </p>
        </div>

        <div className="gpt3_footer-links-div w-[250px] m-[1rem] flex flex-col justify-start">
          <h4 className="font-bold mb-4">Company</h4>
          <p className="text-[12px] leading-[14px] my-[0.5rem] cursor-pointer">
            Terms & Condition
          </p>
          <p className="text-[12px] leading-[14px] my-[0.5rem] cursor-pointer">
            Contact
          </p>
          <p className="text-[12px] leading-[14px] my-[0.5rem] cursor-pointer">
            Counters
          </p>
        </div>

        <div className="gpt3_footer-links-div w-[250px] m-[1rem] flex flex-col justify-start">
          <h4 className="font-bold mb-4">Get in Touch</h4>
          <p className="text-[12px] leading-[14px] my-[0.5rem] cursor-pointer">
            Crechterwoord K12 182 DK Alknjkcb
          </p>
          <p className="text-[12px] leading-[14px] my-[0.5rem] cursor-pointer">
            085-132567
          </p>
          <p className="text-[12px] leading-[14px] my-[0.5rem] cursor-pointer">
            info@payme.net
          </p>
        </div>
      </div>
      <div className="gpt3_footer_copywrite mt-[2rem] text-center w-full">
        <p className="text-[12px] leading-[14px] my-[0.5rem] cursor-pointer text-white">
          © 2021 GPT-3. All rights reserved.
        </p>
      </div> 
    </div>
  );
};

export default Footer;
