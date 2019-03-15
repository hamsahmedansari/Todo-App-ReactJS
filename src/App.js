import React, { Component } from "react";
import "font-awesome/scss/font-awesome.scss";
import "./App.scss";
import Home from "./component/home/home";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
