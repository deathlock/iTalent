import React from 'react';
import { Link } from 'react-router-dom';
import localforage from 'localforage';

class Navbar extends React.Component {
    state = {
        isLogin: false,
        user: {}
    }

    async componentWillMount() {
        let isLogin = await localforage.getItem('isLoggedin');
        if(isLogin) {
            let user = await localforage.getItem('user');
            this.setState({
                isLogin,
                user
            })
        }
    }

    signOut() {
        localforage.removeItem('isLoggedin', function(err) {
            localforage.removeItem('user', function(err) {
                window.location.reload();
            });
        });
    }

    render() {
        return (
            !this.state.isLogin &&
            <ul className="navbar-nav ml-auto header-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Sign in</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link"><button className="btn btn-primary btn-orange-color my-2 my-sm-0">Register</button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/find-talent" className="nav-link"><button className="btn btn-primary btn-orange-color my-2 my-sm-0">Find Talent</button></Link>
                </li>
            </ul> || 
            this.state.isLogin &&
            <ul className="navbar-nav ml-auto header-nav">
                <li className="nav-item welcome-message">
                    Hello, <span className="welcome-name">{this.state.user.Nickname}</span>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/update-profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                    <button onClick={this.signOut} className="btn btn-primary btn-orange-color my-2 my-sm-0">Sign Out</button>
                </li>
            </ul>
        );
    }
}

export default Navbar;