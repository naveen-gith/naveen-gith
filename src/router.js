import React from "react";
import Login from './container/login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./container/NavigationBar";
import Sidebar from "./container/sidebar";
import Records from "./container/records";
import ExcelReader from "./container/Excel";
import EditRecord from "./container/EditRecord";
import home from "./container/home";


export default () => {
    return (
        <React.Fragment>
        <Router>
        
  
          <Switch>
            
          <Route path="/" exact component={Login} />
            <Route path="/home" component={home} />
            {/* <Route exact path="/edit" component={EditRecord} /> */}
            {/* <Route path="/" component={Records} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>
      </React.Fragment>
    );
};
