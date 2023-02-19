import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Employees from "./pages/Employees";
import Header from "./component/Header";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}
