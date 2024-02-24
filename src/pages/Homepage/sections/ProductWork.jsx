"use Client";
import { ProductWorkContent } from "@/constant";
import Image from "next/image";
import React from "react";

const Card = ({ title, text, icon }) => {
  return (
    <div className="flex flex-col min-w-[280px] border border-[#343434] p-10 gap-10">
      <heading className={"font-[600] text-[#FFFFFF] text-[31.25px]"}>
        {title}
      </heading>
      <div className="text-[#A1A1AA] text-[16px] font-[300] ">{text}</div>
      <div className="mt-10">
        <Image src={icon} />
      </div>
    </div>
  );
};

function ProductWork() {
  const text =
    "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.";
  return (
    <section>
      <div className="flex items-center  justify-between	">
        <div className="text-[52px] bg-gradient-to-r from-[#FFFFFF] to-[#71717A] text-transparent bg-clip-text font-[700] leading-[50px] w-[500px]	">
          How Our Product Works
        </div>
        <div className="text-[#A1A1AA] w-[600px] ">
          With Cobalt, managing your business finances is effortless,
          empowering, and anything but boring. Our intuitive platform brings
          clarity to your cash flow, simplifies your financial decision-making,
          and fingertips.
          <span className="text-[#E4E4E7]">
            Say no to spreadsheets and tools designed in the 80s.
          </span>
        </div>
      </div>
      <div className="pt-10 flex overflow-x-scroll flex-shrink-0 ">
        {ProductWorkContent.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductWork;
