import React from "react";
import Articles from "../../components/article/Articles";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div
      className=" flex flex-col section-padding py-[2rem] px-[2rem] lg:py-[4rem] lg:px-[6rem]"
      id="blog"
    >
      <div className=" w-full text-left mb-[5rem]">
        <h1 className="my-[1rem] text-[34px] leading-[45px] lg:text-[62px] lg:leading-[75px] font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container flex md:p-[2rem] flex-col-reverse lg:flex-row ">
        <div className="gpt3__blog-container_groupa  w-full flex-[0.75] md:my-[2rem] lg:my-0 lg:mr-[2rem]">
          <Articles
            imgUrl={blog01}
            date="April 08, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupb flex-[1] grid grid-cols-[repeat(1,1fr)] lg:grid-cols-[repeat(2,1fr)] gap-[2rem] ">
          <Articles
            imgUrl={blog02}
            date="April 08, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Articles
            imgUrl={blog03}
            date="April 08, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Articles
            imgUrl={blog04}
            date="April 08, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Articles
            imgUrl={blog05}
            date="April 08, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
