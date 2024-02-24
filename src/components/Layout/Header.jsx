import { IMAGES } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
	return (
		<header className="flex justify-between items-center py-4 px-40">
			<Link href={'#'}>
				<Image src={IMAGES.logo} />
			</Link>
			<nav className="flex gap-8 text-[#FFFFFF99] text-[14px]">
				<Link href={'#'}>Home</Link>
				<Link href={'#'}>Features</Link>
				<Link href={'#'}>Expertise</Link>
				<Link href={'#'}>Blogs</Link>
				<Link href={'#'}>Contact Us</Link>
			</nav>
			<div className="text-[#FFFFFF99] flex gap-20 items-center text-[14px]">
				<Link
					href={'#'}
					className="border rounded-full border-[#FFFFFF99] px-6 py-1.5"
				>
					Refer & Earn
				</Link>
				<Link href={'#'}>Log In</Link>
			</div>
		</header>
	);
};

export default Header;
