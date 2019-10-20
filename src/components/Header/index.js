import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/">APP de Filmes</Link>
            </div>
        );
    }
}

export default Header;