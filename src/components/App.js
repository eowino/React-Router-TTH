import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import Featured from "./Featured";

const App = () =>
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="React-Router-TTH/" component={Home} />
        <Route path="React-Router-TTH/about" component={About} />
        <Route exact path="React-Router-TTH/teachers" component={Teachers} />
        <Route path="React-Router-TTH/teachers/:topic/:name/" component={Featured} />
        <Route path="React-Router-TTH/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>;

export default App;
