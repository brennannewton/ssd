import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../logo.png';
import Facebook from '../img/fb_ivory.png';
import Instagram from '../img/ig_ivory.png';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm mx-auto my-2 text-title">
                <div className="mr-auto">
                    <Link to="/shop">
                        <NavButton>Shop</NavButton>
                    </Link>
                    <Link to="/about">
                        <NavButton>About</NavButton>
                    </Link>
                </div>
                <Link to="/">
                    <img src={Logo} alt="Logo, a pair of aviator glasses" style={{height: '50px'}}/>
                </Link>
                <div className="ml-auto">
                    <Link to="/cart">
                        <NavButton>
                            <i className="fas fa-shopping-cart"/> Cart
                        </NavButton>
                    </Link>
                    <a
                        href="https://www.facebook.com/second.sight.vintage/"
                        target="_blank"
                        rel="noreferrer"
                        className="m-1"
                    >
                        <img src={Facebook} alt="Facebook icon" style={{height: '35px'}}/>
                    </a>
                    <a
                        href="https://www.instagram.com/emma.lee.makes.jewelry/"
                        target="_blank"
                        rel="noreferrer"
                        className="m-1"
                    >
                        <img src={Instagram} alt="Instagram icon" style={{height: '35px'}}/>
                    </a>
                </div>
            </NavWrapper>
        )
    }
}

const NavButton = styled.button`
background: transparent;
border: 1px solid var(--ivory);
color: var(--ivory);
padding: 0.5rem 1rem;
margin: 1rem;
transition: all 0.3s ease-in-out;
&:hover {
    background: var(--ivory);
    color: var(--onyx);
}
&:focus {
    outline: none;
}
`

const NavWrapper = styled.nav`

`
