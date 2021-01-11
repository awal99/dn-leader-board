import React from "react";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LoginScreen} />
      </Router>
    </div>
  );
}

export default App;
