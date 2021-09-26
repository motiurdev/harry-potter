import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="text-center w-75 mx-auto text-white p-3 rounded" style={{ backgroundColor: "rgb(24 57 50)" }}>
            <h1 className="fw-bold py-3 header-title">Make a Harry Potter Team</h1>
            <p className="w-75 mx-auto">There are some things you can’t share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.</p>
            <h2 className="header-title">Total Budget: 200 Million</h2>
        </div>
    );
};

export default Header;