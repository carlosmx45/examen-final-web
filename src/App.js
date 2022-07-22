import { React, useState, useEffect } from "react"; 

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Store from "./components/Store";
import Product from "./components/Product";

//mis Items
function App() {
  return (
    <Routes>
      <Route path="/" exact element={(props) => <Store/>} />
      <Route path="/product/:id" component={props => <Product {...props} />}/>
      <Route>404 Error</Route>
    </Routes>
  );
}

export default App;
