import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<section id="about" className="section">
			<h3 className="section-name">About</h3>
			<div className="grid grid-cols-1  md:grid-cols-[7fr_6fr] gap-6 md:gap-3">
				<div>
					<h2 className="section-title">Who I Am</h2>
					<p className="max-w-lg mb-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste maiores harum rerum repellat, in eius
						dicta quod commodi ducimus!
					</p>
					<p className="max-w-lg mb-2">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam iusto soluta harum nam eius sed optio
						ea ratione natus sunt, molestiae odit ullam veniam vel dolorem, aut animi. Rerum?
					</p>
					<p className="max-w-lg mb-2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt animi necessitatibus maxime. Provident
						vitae maxime molestias, in consequuntur hic, ipsa facere inventore, ipsam necessitatibus esse!
					</p>
				</div>
				<div className="relative  w-full aspect-[1/.7] place-self-center shadow-lg">
					<Image
						src="/assets/about.jpg"
						className=" bg-white md rounded-lg hover:scale-105 transition-transform cursor-pointer object-cover"
						alt=""
						fill
						sizes="(min-width: 768px) 30vw, 100vw"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
