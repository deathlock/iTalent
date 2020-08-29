import React from 'react';

import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';
import Search from '../search/search';

function Header() {
    return (
        <div>
            <Logo /> Hi I am header. <Navbar />
            <Search />
        </div>
    )
}

export default Header;