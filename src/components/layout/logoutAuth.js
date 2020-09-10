import React from 'react';
import { withRouter } from 'react-router-dom';
import localforage from 'localforage';

class LogoutAuth extends React.Component {
    async componentWillMount() {
        let isLogin = await localforage.getItem('isLoggedin');
        if(isLogin) {
            this.props.history.push("/");
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(LogoutAuth);