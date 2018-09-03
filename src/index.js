import React from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './SignupForm';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import SigninForm from './SigninForm';
import ForgotPwd from './ForgotPwd';
import Home from './Home';

ReactDOM.render(
    <Router>
        <div>
            <Switch>
            <Route exact path ="/" component={SignupForm} />
            <Route path="/signin" component={SigninForm}/>
            <Route path="/forgotpassword" component={ForgotPwd}/>
            <Route path="/home" component={Home}/>
            </Switch>
        </div>
    </Router>
    , 
    document.getElementById('root')
    );
    registerServiceWorker();
