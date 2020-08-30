import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../common/logo/logo';
import { validateEmail } from '../../utils/helpers';

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
        isValidEmail: false,
        isValidPassword: false,
        passwordType: "password"
    }

    onEmailChange = (ev) => {
        const email = ev.target.value;
        const isValidEmail = validateEmail(email);
        let emailError = "";
        if (!isValidEmail) {
            emailError = "Invalid email."
        }
        this.setState({ email, emailError, isValidEmail });
    }

    onPasswordChange = (ev) => {
        const password = ev.target.value;
        let passwordError = "";
        const isValidPassword = password !== "" ? true : false;
        if(!isValidPassword) {
            passwordError = "Password required."
        }
        this.setState({ password, isValidPassword, passwordError });
    }

    onSubmit = () => {
        if(this.state.isValidPassword && this.state.isValidEmail) {
            console.log("submitted.")
        } else {
            this.setState({
                emailError: "Invalid email.",
                passwordError: "Password required."
            })
        }
    }

    render() {
        return (
            <div>
                <div>left section</div>
                <div>
                    <Logo />
                    <span>Sign in</span>
                    <div>
                        <input type="email" name="email" onChange={(ev) => {this.onEmailChange(ev)}} value={this.state.email} />
                        <span className="error">{this.state.emailError}</span>
                    </div>
                    <div>
                        <input type={this.state.passwordType}  name="password" onChange={(ev) => {this.onPasswordChange(ev)}} value={this.state.password} />
                        <span onMouseEnter={() => {this.setState({passwordType: "text"})}} onMouseLeave={() => {this.setState({passwordType: "password"})}}>View password</span>
                        <span className="error">{this.state.passwordError}</span>
                    </div>
                    <Link to="/forgot-password">Forgot password?</Link>
                    <button onClick={this.onSubmit}>Sign in</button>
                    <p>Don't have an account? <Link to="register">Register</Link></p>
                    <p>Copyright 2020 iTalentHub</p>
                </div>
            </div>
        );
    }
}

export default Login;