import React, { useState } from "react";
import axios from "axios";
import ConditionResult from "./ConditionResult";

export default function SearchBar() {
  const [disease, setDisease] = useState("");
  const [results, setResult] = useState([]);
  const [error, setError] = useState(null);

  function displaySearch(response) {
    console.log(response.data);
    if (response.data && response.data.length > 0) {
      const item =
        response.data.find((res) => res.phenotype && res.gene) ||
        response.data[0];

      const cleanedResults = {
        phenotype: item.phenotype || "Not available",
        gene: item.gene || "Not available",
        description: item.description || "Not available",
        location: item.location || "Not available",
      };
      setResult(cleanedResults);
      setError(null);
    } else {
      setResult([]);
      setError("No associated genes found for this disease.");
    }
  }
  // function displaySearch(response) {
  //   setResult(response.data);
  //   console.log(response.data);
  // }

  function search(event) {
    event.preventDefault();

    const formattedQuery = disease.trim().replace(/\s+/g, "%20");
    const capitalisedQuery =
      formattedQuery.charAt(0).toUpperCase() + formattedQuery.slice(1); //make the first character uppercase
    if (!capitalisedQuery) return;

    const apiUrl = `https://rest.ensembl.org/phenotype/term/homo_sapiens/${capitalisedQuery}?content-type=application/json`;
    axios.get(apiUrl).then(displaySearch);

    // event.preventDefault();
    // const formatted_Query = disease.trim().replace(/\s+/g, "%20");
    // if (!disease) return;
    // const apiUrl = `https://rest.ensembl.org/phenotype/term/homo_sapiens/${formatted_Query}?content-type=application/json`;
    // // const apiUrl = `https://rest.ensembl.org/lookup/symbol/homo_sapiens/${disease}?content-type=application/json`;

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
            placeholder="Enter a disease"
            onChange={handleSearchBar}
          ></input>
          <button type="submit">Search</button>
        </form>
      </section>
      {error && <p>{error}</p>}
      <section>
        <ConditionResult results={results} />
      </section>
    </div>
  );
}
