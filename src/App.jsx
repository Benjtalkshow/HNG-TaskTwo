import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/:id" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
