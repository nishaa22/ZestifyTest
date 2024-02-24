import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const OurExpertise = () => {
  return (
    <section className="py-20">
      <div className="text-[52px] bg-gradient-to-r from-[#FFFFFF] to-[#71717A] text-transparent bg-clip-text font-[700] leading-[50px]">
        Our Expertise
      </div>
      <div className="text-base text-[#FFFFFF99] py-2">
        Guiding Your Investments to Greatness: Our Expertise, Your Financial
        Advantage!
      </div>
      <div className="flex justify-center flex-wrap gap-14 py-12">
        {[...new Array(6)].map(() => {
          return (
            <div className="w-[30%]">
              <Image src={IMAGES.expertiseMan} />
              <div className="p-3">
                <div className="flex justify-between py-3">
                  <div>
                    <div className="text-[#E1E1E3]">Arun Kumar</div>
                    <div className="text-[#C6CDD5] font-light text-[12px]">
                      Stock Market
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Image src={IMAGES.star} />
                    <div className="text-[#E1E1E3]">4.4</div>
                  </div>
                </div>
                <div className="flex justify-between mt-5 mb-5">
                  <div className="flex flex-col border-r-2 border-r-[#F1F1F1]  w-[50%]">
                    <div className="text-[12px] text-[#C6CDD5] font-[400]">
                      Exprience
                    </div>
                    <div className="text-[#FFFFFF] text-[18px]"> 7+</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[12px] text-[#C6CDD5] font-[400]">
                      Followers{" "}
                    </div>
                    <div className="text-[#FFFFFF] text-[18px]"> 3.1K</div>
                  </div>
                </div>

                <div className="text-[#A1A1AACC] text-[13px]">
                  Have full control of your business finances on the go using
                  our iOS/Android mobile apps. Because, you know, it’s 2023.
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <span className="text-[#FFFFFF] text-[30px]">₹1,999</span>
                    <span className="text-[#FFFFFF] text-[20px]">/mo</span>
                  </div>
                  <div className="bg-[#FFFFFF] text-[14px] flex rounded-md px-2.5 py-1.5">
                    Subscription
                    <Image src={IMAGES.rightChevron} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurExpertise;
