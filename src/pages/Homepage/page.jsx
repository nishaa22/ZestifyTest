import Header from '@/components/Layout/Header';
import React from 'react';
import TrustedTeams from './sections/TrustedTeams';
import WhyChooseUs from './sections/WhyChooseUs';
import OurExpertise from './sections/OurExpertise';
import Footer from '@/components/Layout/Footer';

const Homepage = () => {
	return (
		<div>
			<Header />
			<TrustedTeams />
			<WhyChooseUs />
			<OurExpertise />
			<Footer />
		</div>
	);
};

export default Homepage;
