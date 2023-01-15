import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import useMedia from '../hooks/useMedia';
import Navigation from './Navigation';
import { useRef } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const matches = useMedia('(min-width: 768px)');
	const closeBtnRef = useRef<HTMLButtonElement>(null);
	const openBtnRef = useRef<HTMLButtonElement>(null);
	const [shadow, setShadow] = useState(false);
	const reversRef = useRef(false);
	useEffect(() => {
		const scrollHandler = () => {
			requestAnimationFrame(() => {
				if (window.scrollY > 100) {
					setShadow(true);
				} else {
					setShadow(false);
				}
			});
		};
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);
	useEffect(() => {
		if (matches) return;
		const closeBtn = closeBtnRef.current;
		const openBtn = openBtnRef.current;
		if (!closeBtn || !openBtn) return;
		const hideKeyframe = [{ transform: 'scale(1)' }, { transform: 'scale(0)' }];
		const showKeyframe = [{ transform: 'scale(0)' }, { transform: 'scale(1)' }];

		let hideAnimationBtn: null | Animation;
		let showAnimationBtn: null | Animation;

		const BtnHandle = () => {
			if (reversRef.current) {
				hideAnimationBtn = openBtn.animate([...showKeyframe], { duration: 200, fill: 'both', delay: 100 });
				showAnimationBtn = closeBtn.animate([...hideKeyframe], { duration: 200, fill: 'both' });
				closeBtn.setAttribute('aria-hidden', 'true');
				openBtn.setAttribute('aria-hidden', 'false');
			} else {
				hideAnimationBtn = openBtn.animate([...hideKeyframe], { duration: 200, fill: 'both' });
				showAnimationBtn = closeBtn.animate([...showKeyframe], { duration: 200, fill: 'both', delay: 100 });
				closeBtn.setAttribute('aria-hidden', 'false');
				openBtn.setAttribute('aria-hidden', 'true');
			}
			reversRef.current = !reversRef.current;
		};

		if (closeBtn && openBtn) {
			openBtn.addEventListener('click', BtnHandle);
			closeBtn.addEventListener('click', BtnHandle);
		}

		return () => {
			if (openBtn) openBtn.removeEventListener('click', BtnHandle);
			if (closeBtn) closeBtn.removeEventListener('click', BtnHandle);
		};
	}, []);

	const onClickHabdler = () => {
		setOpen(false);
		closeBtnRef.current!.animate([{ transform: 'scale(1)' }, { transform: 'scale(0)' }], {
			duration: 100,
			fill: 'both',
		});
		openBtnRef.current!.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], {
			duration: 100,
			fill: 'both',
			delay: 100,
		});
		reversRef.current = false;
	};

	return (
		<header
			className={`fixed w-full z-50 flex justify-between items-center px-2 2xl:px-16 ${
				shadow && 'shadow-lg  bg-white/60 transition-all'
			} `}
		>
			<Link href="/">
				<Image src="/assets/navLogo.png" alt="" width={100} height={100} aria-hidden="true" />
			</Link>
			<Navigation onclick={onClickHabdler} open={open} mobile={!matches} />
			<div
				className="fixed bottom-10 left-10 flex flex-col md:hidden transition-transform"
				style={{ transform: open ? 'translateX(0)' : 'translateX(-200%)' }}
			>
				<h2 className="text-blue-600 mb-5 uppercase">Lets&apos;s connect</h2>
				<ul className="flex gap-5">
					<li>
						<Link href="#!" className="social_links">
							<AiOutlineMail size={15} />
						</Link>
					</li>
					<li>
						<Link href="#!" className="social_links">
							<FaGithub size={15} />
						</Link>
					</li>
					<li>
						<Link href="#!" className="social_links">
							<FaLinkedinIn size={15} />
						</Link>
					</li>
				</ul>
			</div>
			<div className="md:hidden w-[3rem] self-center relative flex items-center justify-center">
				<button ref={closeBtnRef} className="burger absolute" aria-hidden="true" onClick={() => setOpen(false)}>
					<AiOutlineClose size={30} />
				</button>
				<button ref={openBtnRef} className="burger absolute" aria-hidden="false" onClick={() => setOpen(true)}>
					<AiOutlineMenu size={30} />
				</button>
			</div>

			{!matches && open && <div className="fixed inset-0 bg-black/70 -z-20"></div>}
		</header>
	);
};

export default Navbar;
