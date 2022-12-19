import React, { forwardRef } from 'react';
import { Nav, NavWrapper } from './structure';

const Navbar = forwardRef(
    function Navbar(props, ref) {
        return (
            <>
                <Nav ref={ref}>
                    <NavWrapper>
                        {props.Left}
                        {props.Right}
                        {props.children}
                    </NavWrapper>
                </Nav>
            </>

        )
    }
)

export default Navbar;