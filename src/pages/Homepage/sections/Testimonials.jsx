'use client';
import { IMAGES } from '@/assets';
import { testimonials } from '@/constant';
import Image from 'next/image';
import React, { useState } from 'react';

const Testimonials = () => {
	const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
	const [direction, setDirection] = useState('right');

	const nextTestimonial = () => {
		setCurrentTestimonialIndex(
			(prevIndex) => (prevIndex + 1) % testimonials.length
		);
		setDirection('right');
	};

	const prevTestimonial = () => {
		setCurrentTestimonialIndex(
			(prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
		);
		setDirection('left');
	};

	const currentTestimonial = testimonials[currentTestimonialIndex];

	return (
		<section className="pb-28">
			<div className="text-[52px] text-center bg-gradient-to-r from-[#FFFFFF] to-[#71717A] text-transparent bg-clip-text font-[700] leading-[50px]">
				Testimonials
			</div>
			<div className="text-base text-center text-[#FFFFFF99] py-2 w-[60%] mx-auto">
				Our partnerships have delivered great value to our projects and we’re
				happy to share some of their feedback below
			</div>
			{/* <div className="flex justify-center gap-20 py-10 w-[80%] mx-auto">
				<div className="flex justify-center">
					<Image src={IMAGES.leftArrow} />
				</div>
				<div className="w-[50%]">
					<div className="text-[#FFFFFF] text-center leading-7 text-[20px]">
						Since 2019, Gravity team has been an astounding market maker for
						Bitkub. They have proven themselves to be one of the most
						consistent, committed and driven market makers on our exchange.
						Gravity Team has contributed high-quality volume and has proven to
						be very reliable and trustworthy partner. We strongly advocate
						Gravity Team as they have been an indispensable part of our
						market-making team.
					</div>
					<div className="flex justify-center gap-3 py-7">
						<div>
							<Image src={IMAGES.avatar} />
						</div>
						<div>
							<div className="text-[#FFFFFF]">Atthakrit Chimplapibul</div>
							<div className="text-[#FFFFFF] font-thin text-[12px]">
								Co-founder & CEO of Bitkub
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<Image src={IMAGES.rightArrow} />
				</div>
			</div> */}
			<div className="h-[400px] flex justify-center items-center flex-col">
				<div className="flex justify-evenly py-10 w-[80%] mx-auto">
					<div
						className="flex justify-center cursor-pointer"
						onClick={prevTestimonial}
					>
						<Image src={IMAGES.leftArrow} alt="Previous" />
					</div>
					<div
						className={`w-[50%]  transition-transform duration-500 transform translate-x-${
							direction === 'left' ? '-full' : 'full'
						}`}
					>
						<div className="text-[#FFFFFF] h-[300px] flex items-center align-middle text-center leading-7 text-[20px]">
							{currentTestimonial.content}
						</div>
						<div className="flex justify-center gap-10 py-7">
							<div>
								<Image src={currentTestimonial.avatar} alt="Avatar" />
							</div>
							<div>
								<div className="text-[#FFFFFF]">
									{currentTestimonial.author}
								</div>
								<div className="text-[#FFFFFF] font-thin text-[12px]">
									{currentTestimonial.position}
								</div>
							</div>
						</div>
					</div>
					<div
						className="flex justify-center cursor-pointer"
						onClick={nextTestimonial}
					>
						<Image src={IMAGES.rightArrow} alt="Next" />
					</div>
				</div>
				<div className="dots flex justify-center space-x-2">
					{testimonials.map((_, index) => (
						<div
							key={index}
							className={`dot h-2 w-2 rounded-full cursor-pointer ${
								currentTestimonialIndex === index
									? 'bg-gradient-to-r from-purple-600 via-blue-400 to-yellow-400'
									: 'bg-[#333333]'
							}`}
							onClick={() => setCurrentTestimonialIndex(index)}
						></div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
