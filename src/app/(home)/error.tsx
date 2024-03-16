"use client";

import { useEffect } from "react";

export default function Error({ error: reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error");
  }, []);
  return (
    <div>
      <h1>Error</h1>
      <p>There was an error</p>
      <button onClick={reset}>Reload</button>
    </div>
  );
}
