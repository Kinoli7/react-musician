import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LoginForm from '../loginForm/LoginForm';
import Dashboard from '../dashboard/Dashboard';

import '../styles/mainStyle.css';

class Api extends Component {

    constructor() {
        super();
        this.state = {token: undefined, isLogged: false}
        this.isLoggedIn.bind(this);
    }    

    login(username, password) {

        fetch('https://orchestra.pangea.org/api-token-auth/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username='+username+'&password='+password
        })
        .then(response => response.json())
        .then(json => {
            var tk = (JSON.stringify(json['token'])).replace(/\"/g, "");
            if (tk !== undefined) {
                if (tk.length === 40) {
                    this.setState(({token: tk, isLogged: true}))
                }
            }
            else {
                this.setState(({token: undefined, isLogged: false}))
            }
        })
        console.log(this.state.token);
        console.log(this.state.isLogged);
    }

    isLoggedIn() {
        if (!(this.state.token === undefined))
            if (this.state.token.length === 40)
            {
                console.log(true)
                return true;
            }
        console.log(false)
        return false;
    }

    componentDiDMount() {

    }

    render() {

        let router;

        if (this.isLoggedIn()) {
            router = (
                <Router>
                    <Switch>
                        <Route path='/login'>
                            <Redirect to='/' />
                        </Route>
                        <Route path='/' >
                            <Dashboard token={this.state.token}/>
                        </Route>
                    </Switch>
                </Router>
            )
        }
        else {
            router = (
                <Router>
                    <Switch>
                        <Route path='/login'>
                            <LoginForm loginApi={this.login.bind(this)}/>
                        </Route>
                        <Route path='/' >
                            <Redirect to='/login' />
                        </Route>
                    </Switch>
                </Router>
            )
        }

        return router;
    }
}

export default Api;