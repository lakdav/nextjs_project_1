import Link from 'next/link';
import React, { FC } from 'react';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

interface Props {
	mobile?: boolean;
	open?: boolean;
	onclick: () => void;
}

const Navigation: FC<Props> = ({ mobile = true, open, onclick }) => {
	const ref = useRef<any>(null);
	return (
		<>
			{mobile ? (
				<CSSTransition in={open} classNames="navigation" nodeRef={ref} unmountOnExit timeout={200}>
					<nav ref={ref} className="fixed inset-0 left-0 w-3/5 -z-10 shadow-2xl bg-white pl-10 pt-40 flex">
						<ul className="flex flex-col gap-10 ">
							<li>
								<Link onClick={mobile && onclick} className="link" href="/hero"></Link>
							</li>
							<li>
								<Link onClick={mobile && onclick} href="/#about" className="link">
									About
								</Link>
							</li>
							<li>
								<Link onClick={mobile && onclick} href="/#scills" className="link">
									Skills
								</Link>
							</li>
							<li>
								<Link onClick={mobile && onclick} href="/#projects" className="link">
									Projects
								</Link>
							</li>
							<li>
								<Link onClick={mobile && onclick} href="/#contacts" className="link">
									Contacts
								</Link>
							</li>
						</ul>
					</nav>
				</CSSTransition>
			) : (
				<nav className="navigation-screen">
					<ul className="flex gap-10 md:flex-row">
						<li>
							<Link className="link" href="/#hero"></Link>
						</li>
						<li>
							<Link href="/#about" className="link">
								About
							</Link>
						</li>
						<li>
							<Link href="/#scills" className="link">
								Skills
							</Link>
						</li>
						<li>
							<Link href="/#projects" className="link">
								Projects
							</Link>
						</li>
						<li>
							<Link href="/#contacts" className="link">
								Contacts
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};

export default Navigation;
