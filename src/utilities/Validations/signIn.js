import Validator from 'is_js';
import  { isEmpty } from 'lodash';

function validate(data) {
    let errors = {};

    if(Validator.empty(data.email)) {
        errors.email = 'Email is required !';
    }

    if(!Validator.empty(data.email) && !Validator.email(data.email)) {
        errors.email = 'Invalid email !';
    }

    if(Validator.empty(data.password)) {
        errors.password = 'Password is required !';
    }    

    

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validate;