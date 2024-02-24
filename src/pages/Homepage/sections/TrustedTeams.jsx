'use client';
import { trustedTeamsData } from '@/constant';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const TrustedTeams = () => {
	return (
		<section className="py-20 w-full overflow-hidden">
			<div className="text-[#FFFFFF99] text-[14px] text-center py-5">
				Trusted by teams at
			</div>
			<div className="flex justify-center gap-20 marquee-content whitespace-nowrap animate-marqueeX">
				{trustedTeamsData.map((val) => {
					return <Image src={val.src} key={val.id} />;
				})}
			</div>
		</section>
	);
};

export default TrustedTeams;
