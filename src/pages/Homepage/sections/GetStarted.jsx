import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

const GetStarted = () => {
	return (
		<section className={`flex flex-col py-10 hero`}>
			<div className="flex justify-center items-center relative">
				<Image src={IMAGES.ring} height={750} />
			</div>
			<div className="flex flex-col items-center absolute top-[300px] left-[430px]">
				<div className="bg-[#FF921740] w-fit rounded-full px-4 py-2">
					<div className="text-[#FF9217] text-[13px]">
						Featured on Product Hunt &gt;
					</div>
				</div>
				<div className="text-[72px] bg-gradient-to-r from-[#FFFFFF] to-[#9BD0F5] text-transparent bg-clip-text font-[700] leading-[80px] text-center">
					Your team,
					<br /> reimagined.
				</div>
				<div className="text-[#FFFFFF] w-[65%] text-center py-5">
					Take your team up a level with easy-to-use tools, effortless templates
					and efficient workflows.
				</div>
				<div className="bg-[#FFFFFF] w-fit text-[14px] flex rounded-md px-2.5 py-1.5 my-4">
					Get started today
				</div>
				<div className="flex flex-col items-center">
					<div className="text-[#FFFFFF66] text-[14px]">Learn more </div>
					<Image src={IMAGES.smallDownArrow} />
				</div>
			</div>
		</section>
	);
};

export default GetStarted;
