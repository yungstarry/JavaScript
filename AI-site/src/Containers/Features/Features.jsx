import React from "react";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Message or am nothing",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Really boy law county",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
];

const Features = () => {
  return (
    <div
      className="w-full flex justify-between flex-col lg:flex-row py-[2rem] px-[2rem] lg:py-[4rem] lg:px-[6rem]"
      id="features"
    >
      <div className=" flex-1 flex justify-start flex-col mr-[5rem] text-left">
        <h1 className="leading-[38px] text-[28px] md:leading-[62px] md:text-[62px] font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="font-[500] leading-[30px] text-[#FF8A71] my-10">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="flex flex-[1] justify-start flex-col items-center">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
