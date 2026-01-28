import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


const client = new QueryClient();

const container = document.getElementById('root');


if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  );
} else {
  console.error('Root element with ID "root" not found in the document.');
}