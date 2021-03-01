import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import { connect } from "react-redux";
import "./App.css";
import { newGame, resumeGame } from "../../actions";
function App(state) {
  useEffect(() => {
    if (state.resume) {
      state.dispatch(resumeGame());
    } else {
      state.dispatch(newGame());
    }
  }, []);

  return (
    <div className='game'>
      <div className='game__inner'>
        <Header />
        {state.resume ? <Main resume={true} /> : <Main />}
        <Footer />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(App);
