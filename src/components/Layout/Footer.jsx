import { IMAGES } from "@/assets";
import { footerSocialIcons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between pb-20 pt-10">
      <div className="w-80">
        <Image src={IMAGES.logo} />
        <div className="text-[#FFFFFF80] py-3 text-[14px]">
          Our partnerships have delivered great value to our projects and we’re
          happy to share some of their feedback below
        </div>
        <div className="flex gap-6">
          {footerSocialIcons.map((val) => {
            return (
              <Link href={"#"}>
                <Image src={val.src} key={val.id} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex gap-40">
        <div>
          <div className="text-[#FFFFFF] py-2">Product</div>
          <ul className="text-[12px] text-[#FFFFFF80] flex flex-col gap-2">
            <Link href="#">
              <li>About Us</li>
            </Link>
            <Link href="#">
              <li>FAQ’s</li>
            </Link>
            <Link href="#">
              {" "}
              <li>Privacy Policy</li>
            </Link>
            <Link href="#">
              <li>Terms of Service</li>
            </Link>
            <Link href="#">
              <li>Disclaimer</li>
            </Link>
            <Link href="#">
              <li>Submit Grievance</li>
            </Link>
            <Link href="#">
              <li>Features</li>
            </Link>
          </ul>
        </div>
        <div>
          <div className="text-[#FFFFFF] py-2">Community</div>
          <ul className="text-[12px] text-[#FFFFFF80] flex flex-col gap-2">
            <Link href="#">
              <li>Subscription</li>
            </Link>
            <Link href="#">
              <li>Courses</li>
            </Link>
            <Link href="#">
              <li>Webinar</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
