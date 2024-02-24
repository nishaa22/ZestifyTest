import { blogData } from '@/constant';
import Image from 'next/image';
import React from 'react';

const OurBlogs = () => {
	return (
		<section className="py-20">
			<div className="flex justify-between">
				<div className="text-[52px] bg-gradient-to-r from-[#FFFFFF] to-[#71717A] text-transparent bg-clip-text font-[700] leading-[50px] ">
					Our Blogs
				</div>
				<div className="w-[45%]">
					<span className="text-[#A1A1AACC]">
						With Cobalt, managing your business finances is effortless,
						empowering, and anything but boring. Our intuitive platform brings
						clarity to your cash flow, simplifies your financial
						decision-making, and fingertips.{' '}
					</span>
					<span className="text-[#ffffff]">
						Say no to spreadsheets and tools designed in the 80s.
					</span>
				</div>
			</div>
			<div className="flex justify-between gap-10 py-10">
				{blogData.slice(0, 3).map((val) => {
					return (
						<div key={val.id} className=" flex flex-col justify-between">
							<Image src={val.src} height={300} />
							<div className="w-[70%]">
								<div className="text-[#E4E4E7] text-[16px]">{val.heading}</div>
								<div className="text-[#A1A1AACC] text-[12px]">{val.desc}</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex justify-between gap-10 py-10">
				{blogData.slice(3, 5).map((val) => {
					return (
						<div key={val.id} className="flex flex-col justify-between">
							<Image src={val.src} height={300} />
							<div className="w-[60%]">
								<div className="text-[#E4E4E7] text-[16px]">{val.heading}</div>
								<div className="text-[#A1A1AACC] text-[12px]">{val.desc}</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default OurBlogs;
