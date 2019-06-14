import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const Nav = styled.nav`
display: flex;
justify-content: flex-end;
background-color: #fb8aba;
`

const menuLinks = {
margin: '5px',
textDecoration: 'none',
color: 'black',
}


function NavBar(props) {

    return (
            <Nav>
                <Link style={menuLinks} to='/'>Home</Link>
                <Link style={menuLinks} to='/about'>About</Link>
                <Link style={menuLinks} to='projects'>Projects</Link>
                <Link style={menuLinks} to='resume'>Resume</Link>
                <Link style={menuLinks} to='contact'>Contact</Link>
            </Nav>
    )
}

export default withRouter(NavBar) 

//trying to decide the best way to create conditional styling 
// (ie different background colors according to the props.location.pathname)
//tried and didn't work: ternary for color inside return
//--ternary with inline styling
//--ternary for <Nav>