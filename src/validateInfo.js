export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = 'Username required';
    }

    //email 
    if(!values.email) {
      errors.email = "Email required";
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if(!values.password) {
        errors.password = 'Password is  required';
    } else if (values.password.lenght < 6) {
        errors.password = 'Password needs to be 6 charachters or more';
    }

    if(!values.password2) {
        errors.password2 = 'Password is required'
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Password do not match'
    }

    return errors;
}