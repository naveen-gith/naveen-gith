import React from "react";
import Login from './container/login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./container/NavigationBar";
import Sidebar from "./container/sidebar";
import Records from "./container/records";
import ExcelReader from "./container/Excel";
import EditRecord from "./container/EditRecord";

export default () => {
    return (
        <React.Fragment>
        <Router>
          <NavigationBar />
  
          <Sidebar />
  
          <Switch>
            <Route exact path="/" component={ExcelReader} />
            <Route path="/about" component={EditRecord} />
            <Route path="/records" component={Records} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>
      </React.Fragment>
    );
};
