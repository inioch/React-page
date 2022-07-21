import React from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Cennik from "./Cennik/Cennik";
import Kontakt from "./Kontakt/Kontakt";
import Main from "./Main/Main";
import Promocje from "./Promocje/Promocje";
import Paznokcie from "./Paznokcie/Paznokcie";
import Makeup from "./Makeup/Makeup";
import Onas from "./Onas/Onas";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/React-page/" exact element={<Main />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/promocje" element={<Promocje />} />
          <Route path="/paznokcie" element={<Paznokcie />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/onas" element={<Onas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
