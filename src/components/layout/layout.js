import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import Navigator from '../atoms/navigator/navigator';

const navigatorArray = [
    "/",
    "/categories",
    "/talent",
    "/testimonial"
];


class Layout extends React.Component {
    
    state = {
        activeLink: navigatorArray.findIndex(el => el === this.props.location.pathname)
    }

    updateActiveLink = (key) => {
        this.setState({ activeLink: key });
    }

    componentDidMount() {
        if(this.state.activeLink !== navigatorArray.findIndex(el => el === this.props.location.pathname)) {
            this.setState({
                activeLink: navigatorArray.findIndex(el => el === this.props.location.pathname)
            });
        }
    }

    componentDidUpdate() {
        if(this.state.activeLink !== navigatorArray.findIndex(el => el === this.props.location.pathname)) {
            this.setState({
                activeLink: navigatorArray.findIndex(el => el === this.props.location.pathname)
            });
        }
    }

    render() {
        return (
            <React.Fragment>
            <div className={`container-fluid ${(this.state.activeLink !== 1 && this.state.activeLink !== -1 && this.state.activeLink !== 3) || this.props.location.pathname === "/team" ? "header-background-color": ''}`} style={{ position: 'relative' }}>
                <div className="container">
                    <Header />
                    <section className="section-1">
                        {this.props.hasNavigator && <Navigator active={this.state.activeLink} links={navigatorArray} updateActiveLink={(key) => this.updateActiveLink(key)} />}
                        {this.props.children}
                    </section>
                </div>
            </div>
            <Footer hasBackground={(this.state.activeLink === 1 || this.state.activeLink === 3  || this.state.activeLink === -1) && this.props.location.pathname !== "/team" ? false : true} />
            </React.Fragment>
        );
    }

}

Layout.defaultProps = {
    hasNavigator: true
}

export default withRouter(Layout);