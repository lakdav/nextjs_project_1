import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contacts = () => {
	return (
		<section id="contacts" className="section">
			<h3 className="section-name">Contacts</h3>
			<h2 className="section-title">Get In Touch</h2>
			<div className="grid md:grid-cols-[3fr_5fr] lg:grid-cols-[2fr_5fr] gap-4">
				<div className=" shadow-lg rounded-lg p-4 bg-slate-100 pb-10 mb:pb-4">
					<div className="relative aspect-[1/0.67] rounded-lg overflow-hidden mb-2">
						<Image src="/assets/contact.jpg" alt="contact us" fill sizes="(min-width: 768px) 20vw, 100vw" />
					</div>
					<h2 className="text-3xl mb-2">Lemonjava Gocha</h2>
					<h3 className="text-sm mb-6 font-thin tracking-wider">Front-End Developer</h3>
					<p className="mb-16 tracking-wider">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, soluta enim odit optio illo repudiandae
						quibusdam ratione facilis eveniet quo.
					</p>
					<div>
						<h2 className="text-blue-700 mb-5 uppercase text-center">Connetc With Me</h2>
						<ul className="flex justify-evenly gap-5">
							<li>
								<Link
									href="#!"
									className="aspect-square flex justify-center items-center  rounded-full shadow-md hover:shadow-lg shadow-gray-400 transition-colors  w-[60px] text-gray-900 hover:text-blue-700"
								>
									<AiOutlineMail size={40} />
								</Link>
							</li>
							<li>
								<Link
									href="#!"
									className="aspect-square flex justify-center items-center  rounded-full shadow-md hover:shadow-lg shadow-gray-400 transition-colors  w-[60px] text-gray-900 hover:text-blue-700"
								>
									<FaGithub size={40} />
								</Link>
							</li>
							<li>
								<Link
									href="#!"
									className="aspect-square flex justify-center items-center  rounded-full shadow-md hover:shadow-lg shadow-gray-400 transition-colors  w-[60px] text-gray-900 hover:text-blue-700"
								>
									<FaLinkedinIn size={40} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="shadow-lg rounded-lg p-4 bg-slate-100">
					<form className="flex flex-col space-y-5">
						<div className="flex flex-col space-y-5">
							<div className="flex flex-col">
								<label htmlFor="name" className="mb-2 font-semibold -tracking-wider text-gray-600">
									Name
								</label>
								<input
									className="outline-none focus-within:ring rounded-md p-2  text-xl transition-shadow ease-in"
									type="text"
									id="name"
								/>
							</div>
							<div className="flex flex-col">
								<label className="mb-2 font-semibold -tracking-wider text-gray-600" htmlFor="phone">
									Phone
								</label>
								<input
									className="outline-none focus-within:ring rounded-md p-2  text-xl transition-shadow ease-in"
									type="text"
									id="phone"
								/>
							</div>
						</div>
						<div className="flex flex-col">
							<label className="mb-2 font-semibold -tracking-wider text-gray-600" htmlFor="email">
								Email
							</label>
							<input
								className="outline-none focus-within:ring rounded-md p-2  text-xl transition-shadow ease-in"
								type="email"
							/>
						</div>
						<div className="flex flex-col">
							<label className="mb-2 font-semibold -tracking-wider text-gray-600" htmlFor="subject">
								Email
							</label>
							<input
								className="outline-none focus-within:ring rounded-md p-2  text-xl transition-shadow ease-in"
								type="text"
								id="subject"
							/>
						</div>
						<div className="flex flex-col">
							<label className="mb-2 font-semibold -tracking-wider text-gray-600" htmlFor="message">
								Message
							</label>
							<textarea
								className="outline-none focus-within:ring rounded-md p-2  text-xl transition-shadow ease-in"
								id="message"
								rows={10}
							></textarea>
						</div>
						<button className=" bg-gradient-to-r from-[#5651e5] to-[#709dff] uppercase text-center py-3 text-white font-bold rounded-md">
							Send message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
