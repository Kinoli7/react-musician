import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

import '';

class Login extends Component {

    constructor() {
        super();

        this.state = {username: '', password: ''}
 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit () { this.props.loginApi(this.state.username, this.state.password) }

    render () {
        const { username, password } = this.state

        return (
            <div>
                <h1> Pangea Musician </h1>
                <img src='/images/cropped-logo_novaweb_pangea-2-768x226.png' class='ui small image' />
                <div>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input 
                            placeholder=''
                            name='username'
                            value={username}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            type='password'
                            placeholder=''
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                        />
                        <Form.Button content='Submit' />
                    </Form.Group>
                    </Form>
                </div>
            </div>
        )
    };
}

export default Login;