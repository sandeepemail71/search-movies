import React, { useState, useEffect } from 'react';
import { isMobile } from '../../utils';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function Header({ history }) {
    const { location } = history;
    console.log(history.location.pathname)
    return (
        <div>
            <Navbar color="dark" dark expand style={{ height: 80 }}>
                <Nav className={`${isMobile() ? 'mx-0' : 'mx-5'} w-100`} tabs>
                    <NavItem>
                        <NavLink
                            active={location.pathname.includes('home')}
                            href='home'
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={location.pathname.includes('movies')}
                            href='movies'
                        >
                            Movies
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={location.pathname.includes('tv-shows')}
                            href='tv-shows'
                        >
                            Tv shows
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;
