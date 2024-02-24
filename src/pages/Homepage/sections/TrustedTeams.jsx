'use client';
import { trustedTeamsData } from '@/constant';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TrustedTeams = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === trustedTeamsData.length - 1 ? 0 : prevIndex + 1
			);
		}, 2000); // Change the interval as needed
		return () => clearInterval(interval);
	}, []);
	return (
		<section className="py-20 w-full overflow-hidden">
			<div className="text-[#FFFFFF99] text-[14px] text-center py-3">
				Trusted by teams at
			</div>
			<div className="flex justify-center gap-20 marquee-content whitespace-nowrap animate-marqueeX">
				{trustedTeamsData.map((val) => {
					return <Image src={val.src} key={val.id} />;
				})}
			</div>
		</section>
		// <div
		// 	style={{
		// 		display: 'flex',
		// 		alignItems: 'center',
		// 		overflow: 'hidden',
		// 		width: '100%',
		// 		height: '100px',
		// 	}}
		// >
		// 	<AnimatePresence initial={false}>
		// 		{trustedTeamsData.map((logo, index) => (
		// 			<motion.img
		// 				key={logo.id}
		// 				src={logo.src}
		// 				alt={`Logo ${logo.id}`}
		// 				initial={{ x: -index * 100 }} // Adjust the initial position as needed
		// 				animate={{
		// 					x: currentIndex === index ? 0 : (currentIndex - index) * 100,
		// 				}} // Animate only the selected logo to move to the center
		// 				transition={{
		// 					// type: 'tween',
		// 					duration: 1,
		// 					repeat: Infinity,
		// 					repeatType: 'loop',
		// 				}} // Infinite looping animation
		// 				style={{ flexShrink: 0, width: '100px', height: '100px' }}
		// 			/>
		// 		))}
		// 	</AnimatePresence>
		// </div>
	);
};

export default TrustedTeams;
