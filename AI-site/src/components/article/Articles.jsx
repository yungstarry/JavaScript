import React from "react";

const Articles = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog_container_article w-full h-full flex flex-col bg-[#031B34]">
      <div className="gpt3__blog_container_article_img w-full h-full bg-[#031B34]">
        <img className="w-full h-full bg-[#031B34]" src={imgUrl} alt="" />
      </div>
      <div className="gpt3__blog_container_article_content flex flex-col justify-between py-[1rem] px-[1.5rem] h-full">
        <div>
          <p className="text-white leading-[35px] text-[11.69px] font-semibold">
            {date}
          </p>
          <h3 className="text-white leading-[25px] text-[18.11px] lg:leading-[30px] lg:text-[25.11px] font-[700] mb-[5rem] cursor-pointer">
            {title}
          </h3>
        </div>
        <p className="text-white leading-[35px] text-[11.69px] font-semibold cursor-pointer">
          Read Full Article
        </p>
      </div>
    </div>
  );
};

export default Articles;
