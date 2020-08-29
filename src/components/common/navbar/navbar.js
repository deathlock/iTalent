import React from 'react';
import LinkItems from '../../atoms/linkItems/linkItems';

class Navbar extends React.Component {
    render() {
        return(
            <div>
                <LinkItems href="how-it-works" text="How it works" />
                <LinkItems href="soltuions" text="Solutions" />
                <LinkItems href="legal" text="legal" />
                <LinkItems href="signin" text="signin" />
                <LinkItems href="register" text="register" />
            </div>
        );
    }
}

export default Navbar;