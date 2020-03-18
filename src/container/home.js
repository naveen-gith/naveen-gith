import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "../container/NavigationBar";
import Sidebar from "../container/sidebar";
import MyTable from "../container/records";
import ExcelReader from "../container/Excel";
import EditRecord from "../container/EditRecord";

export default () => {
    return (
        <React.Fragment>
            <Router>
                <NavigationBar />
                <Sidebar />
                <Switch>
                    <Route exact path="/home" component={MyTable} />
                    <Route exact path="/about" component={ExcelReader} />
                    <Route exact path="/edit" component={EditRecord} />
                    </Switch>
            </Router>
        </React.Fragment>
    );
};
