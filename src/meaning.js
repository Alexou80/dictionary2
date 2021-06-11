import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <b>{definition.definition}</b>;<br />
                Example: <em>{definition.example}</em>
                <br />
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}