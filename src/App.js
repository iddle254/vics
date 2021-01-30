import React from "react";
import "./App.css";
import Home from "./home/home.component";
import About from "./about/about.page";
import Practice from "./practice-areas/practice.page";
import Insights from "./insights/insights.page";
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { Container } from "semantic-ui-react";
import NotFound from "./components/not-found/Not-found.component";
import Contact from "./components/contact-us/contact-us.component";
// import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/practice-area" component={Practice} />
      <Route path="/insights" component={Insights} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
