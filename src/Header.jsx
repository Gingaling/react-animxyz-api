// import { XyzTransition } from '@animxyz/react';
import './styles.css';
import './Header.css';

export default function Header() {
	return <div className="page-hero" xyz="fade small stagger ease-out-back duration-30">
			<h1>AnimXYZ, CSS Demonstration API</h1>
			<div className="hero-logo" xyz="rotate-right-100%">
			<img className="wormy" alt="Purple-Wormy" src="https://i.imgur.com/13U8rKd.png" />			
			</div>
			<p className="hero-text xyz-nested">
				Purple wormy is curious to see how easy (or hard) it is to use
				AnimXYZ.
			</p>
		</div>;
}
