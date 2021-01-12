import React from "react";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} />
      </Router>
    </div>
  );
}

export default App;
