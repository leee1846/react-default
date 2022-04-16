import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MainRoute;
