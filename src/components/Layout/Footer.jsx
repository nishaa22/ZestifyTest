import { IMAGES } from '@/assets';
import { footerSocialIcons } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className="flex justify-between py-4 px-40 pb-20 pt-20 border-t-2 border-[#FFFFFF1A]">
			<div className="w-80">
				<Image src={IMAGES.logo} />
				<div className="text-[#FFFFFF80] py-3 text-[14px]">
					Our partnerships have delivered great value to our projects and we’re
					happy to share some of their feedback below
				</div>
				<div className="flex gap-6">
					{footerSocialIcons.map((val) => {
						return (
							<Link href={'#'}>
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
						<li>About Us</li>
						<li>FAQ’s</li>
						<li>Privacy Policy</li>
						<li>Terms of Service</li>
						<li>Disclaimer</li>
						<li>Submit Grievance</li>
						<li>Features</li>
					</ul>
				</div>
				<div>
					<div className="text-[#FFFFFF] py-2">Community</div>
					<ul className="text-[12px] text-[#FFFFFF80] flex flex-col gap-2">
						<li>Subscription</li>
						<li>Courses</li>
						<li>Webinar</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
