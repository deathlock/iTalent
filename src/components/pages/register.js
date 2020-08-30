import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../common/logo/logo';
import { validateEmail, validatePhone } from '../../utils/helpers';

class Register extends React.Component {
    state = {
        email: "",
        password: "",
        phone: "",
        name: "",
        emailError: "",
        passwordError: "",
        phoneError: "",
        nameError: ",",
        isValidEmail: false,
        isValidPassword: false,
        isValidPhone: false,
        isValidName: false,
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

    onPhoneChange = (ev) => {
        const phone = ev.target.value;
        const isValidPhone = validatePhone(phone);
        let phoneError = "";
        if (!isValidPhone) {
            phoneError = "Invalid phone number."
        }
        this.setState({ phone, phoneError, isValidPhone });
    }

    onNameChange = (ev) => {
        const name = ev.target.value;
        let nameError = "";
        const isValidName = name !== "" ? true : false;
        if(!isValidName) {
            nameError = "Name required."
        }
        this.setState({ name, isValidName, nameError });
    }


    onSubmit = () => {
        if(this.state.isValidPassword && this.state.isValidEmail && this.state.isValidName && this.state.isValidPhone) {
            console.log("submitted.")
        } else {
            this.setState({
                emailError: "Invalid email.",
                passwordError: "Password required.",
                phoneError: "Invalid phone number.",
                nameError: "Name required."
            })
        }
    }


    render() {
        return (
            <div>
                <div>left section</div>
                <div>
                    <Logo />
                    <span>Register</span>
                    <div>
                        <input type="text" name="name" onChange={(ev) => { this.onNameChange(ev) }} value={this.state.name} />
                        <span className="error">{this.state.nameError}</span>
                    </div>
                    <div>
                        <input type="email" name="email" onChange={(ev) => { this.onEmailChange(ev) }} value={this.state.email} />
                        <span className="error">{this.state.emailError}</span>
                    </div>
                    <div>
                        <input type="text" name="phone" maxLength={10} onChange={(ev) => { this.onPhoneChange(ev) }} value={this.state.phone} />
                        <span className="error">{this.state.phoneError}</span>
                    </div>
                    <div>
                        <input type={this.state.passwordType} name="password" onChange={(ev) => { this.onPasswordChange(ev) }} value={this.state.password} />
                        <span onMouseEnter={() => {this.setState({passwordType: "text"})}} onMouseLeave={() => {this.setState({passwordType: "password"})}}>View password</span>
                        <span className="error">{this.state.passwordError}</span>
                    </div>
                    <button onClick={this.onSubmit}>Register</button>
                    <p>Already have an account? <Link to="login">Sign in</Link></p>
                    <p>Copyright 2020 iTalentHub</p>
                </div>
            </div>
        )
    }
}

export default Register;