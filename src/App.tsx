import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import queryClient from './querys/query';
import GlobalStyles from './assets/GlobalStyles';
import MainRoute from './MainRoute';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <MainRoute />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
