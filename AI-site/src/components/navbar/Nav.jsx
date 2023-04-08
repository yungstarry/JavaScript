import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import image from "../../Img/logo.svg";
const Menu = () => (
  <>
    <a className="hover:text-gray-200" href="#home">
      Home
    </a>
    <a className="hover:text-gray-200" href="#wgpt3">
      WhatisGPT?
    </a>
    <a className="hover:text-gray-200" href="#possibility">
      OpenAi
    </a>
    <a className="hover:text-gray-200" href="#features">
      Case Studies
    </a>
    <a className="hover:text-gray-200" href="#blog">
      Library
    </a>
  </>
)
const Nav = () => {
  const [toggleMenu, SetToggleMenu] = useState(false);
  return (
    <div className="flex justify-between items-center py-[1rem] px-[6rem]">
      <div className=" flex-1 flex justify-start items-center">
        <div className="mr-[2rem] w-[62px] h-[16px] cursor-pointer">
          <img src={image} alt="" />
        </div>
        <div className="text-white hidden lg:flex space-x-[1rem] lg:items-center ">
          <Menu />
        </div>
      </div>
      {/* signs in and up */}

      <div className="items-center gap-3 text-white hidden md:flex ">
        <a className="hover:text-gray-200" href="#pricing">
          Sign in
        </a>
        <a
          className="hover:text-gray-200 bg-[#FF4820] rounded py-2 px-6 text-white"
          href="#contact"
        >
          Sign up
        </a>
      </div>
      {/* mobile menu */}
      <div className=" ml-[1rem] relative flex lg:hidden ">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => SetToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => SetToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="flex flex-col justify-end text-end bg-[#031B34] p-[2rem] absolute top-[40px] right-0 mt-[1rem] rounded shadow-md min-w-[210px] ">
            <div className="text-white flex flex-col gap-3">
              <Menu />
              <div className="flex flex-col gap-2 text-white  text-right">
                <a className="hover:text-gray-200" href="#pricing">
                  Sign in
                </a>
                <a
                  className="hover:text-gray-200 bg-[#FF4820] rounded py-2 px-8 text-white m-0"
                  href="#signup"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
