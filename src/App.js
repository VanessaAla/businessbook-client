import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SearchBusiness from "./pages/SearchBusiness";

import { useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";

function App() {
  const isLoading = useSelector(selectAppLoading);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/search" component={SearchBusiness} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
