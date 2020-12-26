import React from "react";
import { connect } from "react-redux";
import { decCount, incCount } from "../reducers/action";

function App(props) {
  return (
    <div id="main">
      <div data-testid="counter">{props.state.count}</div>
      <button onClick={() => props.dispatch(decCount())}>-</button>
      <button onClick={() => props.dispatch(incCount())}>+</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps)(App);
