import React, { Component } from "react";
import './ForgotPwd.css';
import validate from '../utilities/Validations/reset';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

class ForgotPwd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                newPassword: '',
                confirmNewPassword: ''
            },
            errors: {},
        }
    }

    onChange = (key, e) => {
        let { values } = this.state;
        values[key] = e.target.value;

        this.setState({ values });
    }

    isValid = (data) => {
        let { isValid, errors } = validate(data);
        this.setState({ errors });
        return isValid;
    }

    resetPassword = () => {
        const { values } = this.state;
        if (!this.isValid(values)) {
            return;
        }
    }

    render() {
        const { errors = {} } = this.state;
        return (
            <div className="wrapper clearfix" md={6} sm={4} xs={2}>
                <div className="Form" md={6} sm={4} xs={2}>
                    <PageHeader className="padding">
                       <small> Reset Password </small>
                    </PageHeader>
                    <Form>
                        <FormGroup>
                            <Col md={12}>
                                <FormControl
                                    type="password"
                                    placeholder="Enter New Password"
                                    value={this.state.values.newPassword}
                                    onChange={this.onChange.bind(this, 'newPassword')}
                                />
                                <p>
                                <div className="danger">{errors.newPassword}</div>
                                </p>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col md={12}>
                                <FormControl
                                    type="password"
                                    placeholder="Confirm New Password"
                                    value={this.state.values.confirmNewPassword}
                                    onChange={this.onChange.bind(this, 'confirmNewPassword')}
                                />
                                <p>
                                <div className="danger">{errors.confirmNewPassword}</div>
                                </p>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col sm={10}>
                                <Button onClick={this.resetPassword}>
                                    SUBMIT
                            </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default ForgotPwd;