import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Banner from "./components/Banner";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Banner}></Route>
          <Route exact path="/about" component={AboutMe}></Route>{" "}
          <Route exact path="/work" component={Work}></Route>
          <Route exact path="/skills" component={Skills}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
