import Validator from 'is_js';
import  { isEmpty } from 'lodash';

function validate(data){
    let errors={};

    if (Validator.empty(data.newPassword)){
        errors.newPassword = ' *Required New Password !'
    }

    if (Validator.empty(data.confirmNewPassword)){
        errors.confirmNewPassword = ' *Required Confirm Password !'
    }

    return{
        isValid : isEmpty(errors),
        errors

    }
}

export default validate;