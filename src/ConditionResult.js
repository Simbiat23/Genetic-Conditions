// import React from "react";

export default function ConditionResult({ results }) {
  if (!results || results.length === 0) {
    return <p>No results yet. Try searching for a disease.</p>;
  }

  return (
    <div>
      <h2> Search Results</h2>
      <p>
        <strong>Disease(Phenotype):</strong> {results.phenotype}
      </p>
      <p>
        <strong>Gene:</strong> {results.gene}
      </p>
      <p>
        <strong>Description:</strong> {results.description}
      </p>
      <p>
        <strong>Location:</strong> {results.location}
      </p>
    </div>
  );
  // if (!{ results }) return "Please enter a disease ";
  // return (
  //   <div>
  //     <ul>
  //       {results.map(function (result, index) {
  //         return (
  //           <li key={index}>

  //             <p>
  //               <strong>Disease (Phenotype):</strong> {result.phenotype}
  //             </p>
  //             <p>
  //               <strong>Gene:</strong> {result.gene}
  //             </p>
  //             <p>
  //               <strong>Description:</strong> {result.description}
  //             </p>
  //             <p>
  //               <strong>Location:</strong> {result.location}
  //             </p>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
  //   return (
  //     <div>
  //       <h1>{results.display_name}</h1>
  //       <p>{results.description}</p>
  //       <p>
  //         Location:{results.seq_region_name}:{results.start}-{results.end}
  //       </p>
  //     </div>
  //   );
}
