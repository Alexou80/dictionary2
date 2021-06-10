import React, { useState } from "react";

import "./dictionary.css";

export default function Dictionary() {

  let [keyword, setKeyword] = useState("");

  function search(event) {
    function handelresponse(response){}
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiurl='https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}';
    axios. get(apiUrl).then(handelresponse);
  }
  
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
