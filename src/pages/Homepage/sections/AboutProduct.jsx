'use client';
import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

function AboutProduct() {
	return (
		<section className="">
			<div className=" flex flex-col gap-10">
				<div className=" flex justify-center flex-col align-center">
					<div className="text-[50px] bg-gradient-to-r from-[#FFFFFF] to-[#71717A] text-transparent bg-clip-text font-[700] leading-[50px] text-center w-[500px]	m-auto">
						About Our Product & Features
					</div>
					<div className="text-[#A1A1AA] text-center py-4">
						Empower your teams to build better processes, for a better workplace
					</div>
				</div>
				<div className="flex">
					<Image src={IMAGES.product_features} />
					<div className="flex flex-col gap-4">
						<div className="text-[#56C2FF] text-[15px]">Lorem Ipsum Dolor</div>
						<div className="text-[30px] bg-gradient-to-r from-[#FFFFFF] to-[#71717A] text-transparent bg-clip-text font-[700] leading-[30px] w-[400px]">
							Lorem ipsum dolor sit amet consectetur.
						</div>
						<div className="text-[#A1A1AA] w-[600px] ">
							With great teams come great processes. Using our developer API,
							create and publish extensions to your organization’s Private
							Extension Store for your team to install.
						</div>
						<div className="text-[#A1A1AA] w-[600px]">
							Build extensions to quickly access company brand assets, log
							feedback, book time off, or search your employee index.
						</div>
						<div className="text-[15px] flex gap-2 text-[#FFFFFF]">
							<div>Explore More </div>
							<Image src={IMAGES.smallRightArrow} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutProduct;
