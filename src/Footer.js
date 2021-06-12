import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<footer className="Footer pt-2">
			This project was coded by{" "}
			<p> Alexandra Philips</p>
			. It is
			<a
				href="https://github.com/Alexou80/dictionary2"
				target="_blank"
				rel="noopener noreferrer"
			>
				{" "}
				open-sourced on GitHub
			</a>{" "}
			and{" "}
			<a
				href="https://naughty-meitner-3cbe5c.netlify.app/"
				target="_blank"
				rel="noopener noreferrer"
			>
				hosted on Netlify.
			</a>
		</footer>
	);
}
