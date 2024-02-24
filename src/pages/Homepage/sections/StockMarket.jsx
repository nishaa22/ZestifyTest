import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

const StockMarket = () => {
	return (
		<section className="pb-20 flex justify-between">
			<div className="w-[50%] flex flex-col justify-center">
				<div className="text-[52px] bg-gradient-to-r from-[#FFFFFF] to-[#71717A] text-transparent bg-clip-text font-[700] leading-[50px] ">
					Our Stock Market Experties
				</div>
				<div className="text-[#FFFFFF99] text-[14px] py-3">
					Empower your teams to build better processes, for a better workplace.
				</div>
				<div className="bg-[#FFFFFF] w-fit text-[14px] flex rounded-md px-4 py-2">
					Join Expert Team
				</div>
			</div>
			<div className="w-[50%] flex justify-center gap-10 overflow-hidden">
				<div className="flex flex-col gap-10 marquee-content whitespace-nowrap animate-marqueeTop">
					<Image src={IMAGES.stockMarket} />
					<Image src={IMAGES.stockMarket} />
					<Image src={IMAGES.stockMarket} />
				</div>
				<div className="flex flex-col gap-10  marquee-content whitespace-nowrap animate-marqueeDown">
					<Image src={IMAGES.stockMarket} />
					<Image src={IMAGES.stockMarket} />
					<Image src={IMAGES.stockMarket} />
				</div>
			</div>
		</section>
	);
};

export default StockMarket;
