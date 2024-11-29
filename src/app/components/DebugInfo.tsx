import React, { useEffect, useState } from "react";

const DebugInfo = () => {
  const [debugData, setDebugData] = useState(null);

  useEffect(() => {
    fetch("/static-data/debug.json")
      .then((response) => response.json())
      .then((data) => setDebugData(data))
      .catch((error) => console.error("Error fetching debug data:", error));
  }, []);

  if (!debugData) {
    return <p>Loading debug information...</p>;
  }

  return (
    <div>
      <h2>Debug Information</h2>
      <pre>{JSON.stringify(debugData, null, 2)}</pre>
    </div>
  );
};

export default DebugInfo;
