import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import About from "./pages/About";

function App() {
  return (
    <div className="container">
      <Router>
        <LeftContainer />
        <Switch>
          <Route exact path="/" component={RightContainer} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
