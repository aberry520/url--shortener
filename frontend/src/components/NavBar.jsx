import { Link } from "react-router-dom"
import styled from "styled-components";
const Nav = styled.div`
    display: flex;
    gap: 10px;
`

export const NavBar = () => {
    return (
        <>
            <Nav>
                <Link to={'/'}><p>Home</p></Link>
                <Link to={'signup/'}><p>Sign Up</p></Link>
                <Link to={'login/'}><p>Log In</p></Link>
            </Nav>
        </>
    )
}