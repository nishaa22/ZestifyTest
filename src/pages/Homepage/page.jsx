import Header from '@/components/Layout/Header';
import React from 'react';
import TrustedTeams from './sections/TrustedTeams';
import WhyChooseUs from './sections/WhyChooseUs';
import OurExpertise from './sections/OurExpertise';
import Footer from '@/components/Layout/Footer';
import OurBlogs from './sections/OurBlogs';
import StockMarket from './sections/StockMarket';

const Homepage = () => {
	return (
		<div>
			<Header />
			<TrustedTeams />
			<WhyChooseUs />
			<OurExpertise />
			<StockMarket />
			<OurBlogs />
			<Footer />
		</div>
	);
};

export default Homepage;
