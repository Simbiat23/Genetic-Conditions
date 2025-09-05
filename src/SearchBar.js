import React, { useState } from "react";
import axios from "axios";
import ConditionResult from "./ConditionResult";

export default function SearchBar() {
  const [disease, setDisease] = useState("");
  const [results, setResult] = useState(null);

  function displaySearch(response) {
    setResult(response.data);
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    if (!disease) return;
    const apiUrl = `https://rest.ensembl.org/lookup/symbol/homo_sapiens/${disease}?content-type=application/json`;

    axios.get(apiUrl).then(displaySearch);
  }

  function handleSearchBar(event) {
    setDisease(event.target.value);
  }

  return (
    <div>
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a gene"
            onChange={handleSearchBar}
          ></input>
          <button type="submit">Search</button>
        </form>
      </section>
      <section>
        <ConditionResult results={results} />
      </section>
    </div>
  );
}
