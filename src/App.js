import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import About from "./pages/About";
import Details from "./pages/Details";

function App() {
  return (
    <div className="container">
      <Router>
        <LeftContainer />
        <Switch>
          <Route exact path="/" component={RightContainer} />
          <Route path="/about" component={About} />
          <Route path="/details" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
