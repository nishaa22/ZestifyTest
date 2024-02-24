import { IMAGES } from '@/assets';
import { whyChooseUsData } from '@/constant';
import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
	return (
		<section className="py-20">
			<div className="text-[52px] text-center bg-gradient-to-r from-[#FFFFFF] to-[#71717A] text-transparent bg-clip-text font-[700] leading-[50px]">
				Why Choose Us
			</div>
			<div className="text-base text-[#FFFFFF99] text-center w-[52%] mx-auto py-4">
				Turn Pro to harness the power of AI, make Raycast your own with custom
				themes, keep your Macs in sync and more.
			</div>
			<div className="flex justify-center gap-14 py-4">
				{whyChooseUsData.map((val) => {
					return (
						<div key={val.id} className="w-[300px]">
							<Image src={val.src} />
							<div className="w-[260px] p-3">
								<div className="text-[#FFFFFF] text-[16px] py-1">
									{val.heading}
								</div>
								<div className="text-[#FFFFFFCC] text-[14px] font-light">
									{val.desc}
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<Image src={IMAGES.webinar} className="py-10" />
		</section>
	);
};

export default WhyChooseUs;
