import React from "react";

export default function ConditionResult({ results }) {
  console.log({ results });
  return (
    <div>
      <h1>{results.display_name}</h1>
      <p>{results.description}</p>
      <p>
        {results.seq_region_name}:{results.start}-{results.end}
      </p>
    </div>
  );
}
