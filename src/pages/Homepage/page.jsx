import React from 'react';
import TrustedTeams from './sections/TrustedTeams';
import WhyChooseUs from './sections/WhyChooseUs';
import OurExpertise from './sections/OurExpertise';
import OurBlogs from './sections/OurBlogs';
import StockMarket from './sections/StockMarket';
import AboutProduct from './sections/AboutProduct';
import ProductWork from './sections/ProductWork';
import Testimonials from './sections/Testimonials';
import GetStarted from './sections/GetStarted';
import Feature from './sections/Feature';

const Homepage = () => {
	return (
		<div>
			<GetStarted />
			<TrustedTeams />
			<AboutProduct />
			<Feature />
			<WhyChooseUs />
			<OurExpertise />
			<ProductWork />
			<StockMarket />
			<OurBlogs />
			<Testimonials />
		</div>
	);
};

export default Homepage;
