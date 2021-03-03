import React from "react";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Options from "./components/options/options";
import "./index.css";
import store from "./components/store";
import Game from "./components/Game";
localStorage.setItem(`X`, 0);
localStorage.setItem("O", 0);
ReactDom.render(
  <Provider store={store}>
    <Router>
      <Route path='/' exact component={Game} />
      <Route path='/options' exact component={Options} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
