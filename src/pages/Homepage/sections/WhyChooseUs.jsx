import { IMAGES } from '@/assets';
import { whyChooseUsData } from '@/constant';
import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
	return (
		<section className="bg-[#06030E] py-6 px-40">
			<div
				className="text-center text-4xl font-semibold"
				style={{
					background: '-webkit-linear-gradient(#FFFFFF, #71717A)',
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent',
				}}
			>
				Why Choose Us
			</div>
			<div className="text-base text-[#FFFFFF99] text-center w-[52%] mx-auto py-2">
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
			<Image src={IMAGES.webinar} className="py-4" />
		</section>
	);
};

export default WhyChooseUs;
