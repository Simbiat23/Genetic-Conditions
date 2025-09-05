import React from "react";

export default function ConditionResult({ results }) {
  return (
    <div>
      <h3>Gene: {results.display_name}</h3>
      <p>Description:{results.description}</p>

      <p>
        Description:{results.seq_region_name}:{results.start}-{results.end}
      </p>
    </div>
  );
}
