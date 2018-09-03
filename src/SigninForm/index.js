import React, { Component } from "react";
import './SigninForm.css';
import { Link } from 'react-router-dom';
import validate from '../utilities/Validations/signIn';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

var trueValues = {
    email: 'abc@gmail.com',
    password: 'abc@123'
}
class SigninForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            },
            errors: {}
        };
    }

    onChange = (key, e) => {
        let { user } = this.state;
        user[key] = e.target.value;

        this.setState({ user });
    }

    isValid = (data) => {
        let { isValid, errors } = validate(data);
        this.setState({ errors });
        return isValid
    }

    signInUser = () => {
        const { user } = this.state;
        if (!this.isValid(user)) {
            return;
        }

        console.log('Hello World!');

        if (user.email === trueValues.email && user.password === trueValues.password) {
            this.props.history.push('/home');
        }
    }

    render() {
        const { errors = {} } = this.state;

        return (

            <div className="wrapper clearfix">
                <div className="Form ">
                    <PageHeader className="padding">
                        SIGN IN
                    </PageHeader>
                    <Form>
                        <FormGroup>
                            <Col md={12}>
                                <FormControl
                                    type="input"
                                    placeholder="Email"
                                    value={this.state.user.email}
                                    onChange={this.onChange.bind(this, 'email')}
                                />
                                <p>
                                    <div className="danger">{errors.email}</div>
                                </p>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col md={12}>
                                <FormControl type="password"
                                    placeholder="Password"
                                    value={this.state.user.password}
                                    onChange={this.onChange.bind(this, 'password')}
                                />
                                <p>
                                    <div className="danger">{errors.password}</div>
                                </p>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col sm={10}>
                                <Checkbox>Remember Me</Checkbox>
                            </Col>
                        </FormGroup>

                        <div className="row Style clearfix">
                            <div className="subheading clearfix">
                                <Link to="/forgotpassword">
                                    <span>
                                        Forgot Password?
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <FormGroup>
                            <Col sm={10}>
                                <Button
                                    onClick={this.signInUser} >
                                    SIGN IN
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>

        );
    }
}

export default SigninForm;