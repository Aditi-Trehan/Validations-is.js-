import React, { Component } from "react";
import './index.css';
import { Link } from 'react-router-dom';
import validate from '../utilities/Validations/signup';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            body: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            errors: {}
        }
    }

    onChange = (key, e) => {
        let { body } = this.state;
        body[key] = e.target.value;

        this.setState({ body });
    }

    isValid = (data) => {
        let { isValid, errors } = validate(data);
        this.setState({ errors });
        return isValid
    }

    signUpUser = () => {
        const { body } = this.state;
        if (!this.isValid(body)) {
            return;
        }
    }

    render() {
        const { errors = {} } = this.state;
        return (
            <div className="container clearfix">
                <div className="form col-sm-12 ">
                    <div className="login  ">
                        <PageHeader className="padding">
                            SIGN UP
                        </PageHeader>
                        <Form>
                            <FormGroup >
                                <Col md={12} >
                                    <FormControl
                                        type="text"
                                        placeholder="First Name"
                                        value={this.state.body.firstName}
                                        onChange={this.onChange.bind(this, 'firstName')}
                                    />
                                    <p>
                                    <div className="danger">{errors.firstName}</div>
                                    </p>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={12} >
                                    <FormControl
                                        type="text"
                                        placeholder="Last Name"
                                        value={this.state.body.lastName}
                                        onChange={this.onChange.bind(this, 'lastName')}
                                    />
                                    <p>
                                    <div className="danger"> {errors.lastName} </div>
                                    </p>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={12} >
                                    <FormControl
                                        type="text"
                                        placeholder="Email"
                                        value={this.state.body.email}
                                        onChange={this.onChange.bind(this, 'email')}
                                    />
                                    <p>
                                    <div className="danger">{errors.email}</div>
                                    </p>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={12} >
                                    <FormControl
                                        type="text"
                                        placeholder="Password"
                                        value={this.state.body.password}
                                        onChange={this.onChange.bind(this, 'password')}
                                    />
                                    <p>
                                    <div className="danger">{errors.password}</div>
                                    </p>
                                </Col>
                            </FormGroup>

                            <FormGroup >
                                <Col md={12} >
                                    <FormControl
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={this.state.body.confirmPassword}
                                        onChange={this.onChange.bind(this, 'confirmPassword')}
                                    />
                                    <p>
                                    <div className="danger">{errors.confirmPassword}</div>
                                    </p>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={10}>
                                    <Button onClick={this.signUpUser}>
                                        SIGN UP
                                    </Button>
                                </Col>
                            </FormGroup>

                        </Form>
                        <div className="row clearfix Margin">
                            <p className="Padding">
                                <small>
                                Already have an account ?
                                </small>
                        <Link to="/signin">
                                    <span> SIGN IN </span>
                                </Link>
                                here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default SignUpForm;