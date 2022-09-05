import * as React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client ={client}>
    <App />
  </QueryClientProvider>,

  document.getElementById('root')
  );
