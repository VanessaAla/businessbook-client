import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SearchBusiness from "./pages/SearchBusiness";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/search" component={SearchBusiness} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
