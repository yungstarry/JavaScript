import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./import";
const Brand = () => {
  return (
    <div className=" flex justify-center items-center flex-wrap py-[4rem] px-[6rem] ">
      <div className="max-w-[150px] min-w-[100px] md:min-w-[120px] flex-1 justify-center items-center flex m-[1rem]">
        <img src={google} alt="" />
      </div>
      <div className="max-w-[150px] min-w-[100px] md:min-w-[120px] flex-1 justify-center items-center flex m-[2rem]">
        <img src={slack} alt="" />
      </div>
      <div className="max-w-[150px] min-w-[100px] md:min-w-[120px] flex-1 justify-center items-center flex m-[2rem]">
        <img src={atlassian} alt="" />
      </div>
      <div className="max-w-[150px] min-w-[100px] md:min-w-[120px] flex-1 justify-center items-center flex m-[2rem]">
        <img src={dropbox} alt="" />
      </div>
      <div className="max-w-[150px] min-w-[100px] md:min-w-[120px] flex-1 justify-center items-center flex m-[2rem]">
        <img src={dropbox} alt="" />
      </div>
    </div>
  );
};

export default Brand;
