import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import MainMenu from "./components/mainMenu/main-menu";
import Options from "./components/options";
import { resumeGame } from "./actions";
import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' exact component={MainMenu} />
      <Route path='/game' component={App} />
      <Route
        path='/resume-game'
        render={() => {
          store.dispatch(resumeGame());
          return <App resume={true} />;
        }}
      />
      <Route path='/options' component={Options} />
    </Router>
  </Provider>,

  document.getElementById("root")
);
