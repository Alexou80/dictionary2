import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h5>{props.meaning.partOfSpeech}</h5>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<p>
							<div className="definiton"> {definition.definition}</div>
							<div className="example"> {definition.example}</div>
							<Synonyms synonyms={definition.synonyms} />
						</p>
					</div>
				);
			})}
		</div>
	);
}

