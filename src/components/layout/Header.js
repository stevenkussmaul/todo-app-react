import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>To-Do List</h1>
        </header>
    )
}

const headerStyle = {
    color: 'blue'
}

export default Header;