import React from "react";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Options from "./components/options/options";
import "./index.css";
import store from "./components/store";
import Game from "./components/Game";
import Statistics from "./statistics/statistics";
localStorage.setItem(`X`, 0);
localStorage.setItem("O", 0);
if (!localStorage.getItem("xColor")) {
  localStorage.setItem("xColor", "purple");
} else if (!localStorage.getItem("oColor")) {
  localStorage.setItem("oColor", "brown");
} else if (!localStorage.getItem("games")) {
  localStorage.setItem("games", JSON.stringify([]));
}
ReactDom.render(
  <Provider store={store}>
    <Router>
      <Route path='/' exact component={Game} />
      <Route path='/options' exact component={Options} />
      <Route path='/statistics' exact component={Statistics} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

alert(
  "Если есть возможность, проверьте, очень сильно пожалуйста, в последний день кросс-чека."
);
