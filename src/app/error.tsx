'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Error boundary caught an error:', error);
  }, [error]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Oops! Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={reset} style={{ marginTop: 10 }}>
        Try again
      </button>
    </div>
  );
}
