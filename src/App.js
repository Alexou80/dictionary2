
import "./App.css";
import React from "react";
import Dictionary from "./dictionary";
import Footer from "./Footer";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<h1 className="p-3">
					Dictionary <i class="fas fa-book-reader"></i>
				</h1>
				<Dictionary defaultKeyword="dictionary" />
			</div>
			<Footer />
		</div>
	);
}
