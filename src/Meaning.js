import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="definition">
            <div key={index}>{definition.definition}</div>
            <div className="example">{definition.example}</div>
            <Synonyms Synonyms={definition.Synonyms} />
          </div>
        );
      })}
    </div>
  );
}
