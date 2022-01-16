import React from "react";
import "./App.css";
import Header from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Wishlist from "./views/Wishlist";
import Cart from "./views/Cart";
import Productdetails from "./views/Productdetails";
import Page404 from "./Components/Page404";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/wishlist" component={Wishlist}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/productdetails" component={Productdetails}></Route>
          <Route path="/:any" component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
