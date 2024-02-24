import Header from '@/components/Layout/Header';
import React from 'react';
import TrustedTeams from './sections/TrustedTeams';
import WhyChooseUs from './sections/WhyChooseUs';
import OurExpertise from './sections/OurExpertise';
import Footer from '@/components/Layout/Footer';
import OurBlogs from './sections/OurBlogs';
import StockMarket from './sections/StockMarket';
import AboutProduct from './sections/AboutProduct';
import ProductWork from './sections/ProductWork';

const Homepage = () => {
	return (
		<div>
			<Header />
			<TrustedTeams />
			<AboutProduct />
			<WhyChooseUs />
			<OurExpertise />
			<StockMarket />
			<OurBlogs />
			<ProductWork />
			<Footer />
		</div>
	);
};

export default Homepage;
