import React from 'react';
import Login from './Login';
import Signup from './Signup';
import UserProfile from './UserProfile';
import { Route, Switch } from "react-router-dom";

export default class Content extends React.Component {
    render = () =>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/userprofile" component={UserProfile} />
            <Route path="/" component={Login} />
        </Switch>
}