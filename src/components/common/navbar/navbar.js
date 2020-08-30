import React from 'react';
import LinkItems from '../../atoms/linkItems/linkItems';

class Navbar extends React.Component {
    render() {
        return(
            <div>
                <LinkItems href="how-it-works" text="How it works" />
                <LinkItems href="soltuions" text="Solutions" />
                <LinkItems href="legal" text="legal" />
                <LinkItems href="login" useLink={true} text="signin" />
                <LinkItems href="register" useLink={true} text="register" />
            </div>
        );
    }
}

export default Navbar;