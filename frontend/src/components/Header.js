import React from 'react';

function Header({ title, children }){
    return (
        <header>
            <h2>{title}</h2>
            {children}
        </header>
    );
}

export default Header;