'use client';
import { IMAGES } from '@/assets';
import { freatures } from '@/constant';
import Image from 'next/image';
import React, { useState } from 'react';

const Card = ({ text, icon, title, index, currentCard, setCurrentCard }) => {
	return (
		<div
			onClick={() => setCurrentCard(index)}
			className={`p-8 flex flex-col gap-5 cursor-pointer rounded-md ${
				currentCard === index && 'bg-[#FFFFFF0D]'
			}`}
		>
			<Image src={icon} />
			<div className="text-[#FFFFFF] text-[15px]">{title}</div>
			<div className="text-[#FFFFFF99] text-[13px]">{text}</div>
		</div>
	);
};

function Feature() {
	const [currentCard, setCurrentCard] = useState(0);

	return (
		<section>
			<div className="w-full h-[600px] bg-[#FFFFFF0D] rounded-md">
				<div className="flex justify-center items-center pt-52">
					<Image src={IMAGES.feature_icon} />
				</div>
				<div className="flex justify-center items-center -mt-20">
					<Image src={IMAGES.playButton} />
				</div>
			</div>
			<div className="flex mt-4">
				{freatures.map((val, index) => {
					return (
						<Card
							key={index}
							title={val.title}
							text={val.text}
							icon={val.icon}
							index={index}
							currentCard={currentCard}
							setCurrentCard={setCurrentCard}
						/>
					);
				})}
			</div>
			<div className=" mt-10 flex justify-center">
				<Image src={IMAGES.product_value} />
			</div>
		</section>
	);
}

export default Feature;
