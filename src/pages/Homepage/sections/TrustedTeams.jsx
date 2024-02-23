import { trustedTeamsData } from '@/constant';
import Image from 'next/image';
import React from 'react';

const TrustedTeams = () => {
	return (
		<section className="bg-[#06030E] py-4 px-40">
			<div className="text-[#FFFFFF99] text-[14px] text-center py-3">
				Trusted by teams at
			</div>
			<div className="flex justify-center gap-20">
				{trustedTeamsData.map((val) => {
					return <Image src={val.src} key={val.id} />;
				})}
			</div>
		</section>
	);
};

export default TrustedTeams;
