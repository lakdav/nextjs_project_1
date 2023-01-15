import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
	return (
		<section
			id="hero"
			className="w-full  mx-auto  max-w-7xl min-h-screen flex flex-col justify-center items-center gap-2 text-center"
		>
			<h2 className="uppercase text-sm text-grey-600 tracking-wider bg-gray-300 font-normal">
				let&apos;s buld something to0gethar
			</h2>
			<h1 className=" leading-relaxed">
				Hi,I&apos;am <span className="text-blue-600">Client</span> <br /> A Front-End Web Developer
			</h1>
			<p className="max-w-sm text-base mb-4">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ratione reprehenderit, odit assumenda itaque
				harum deleniti quas. Quasi quia illo dicta qui ex error voluptatum fuga. Numquam magni est laboriosam.
			</p>
			<ul className="flex gap-5">
				<li>
					<Link href="#!" className="social_links w-[3rem]">
						<AiOutlineMail size={20} />
					</Link>
				</li>
				<li>
					<Link href="#!" className="social_links w-[3rem]">
						<FaGithub size={20} />
					</Link>
				</li>
				<li>
					<Link href="#!" className="social_links w-[3rem]">
						<FaLinkedinIn size={20} />
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default Hero;
