import React from 'react';
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
        activeLink: 0
    }

    updateActiveLink = (key) => {
        this.setState({ activeLink: key });
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                    {this.props.children}
                    <Navigator active={this.state.activeLink} links={navigatorArray} updateActiveLink={(key) => this.updateActiveLink(key)} />
                <Footer />
            </React.Fragment>
            );
    }
    
}

export default Layout;