import React from 'react'
import "./index.css"
import { FiShoppingCart } from "react-icons/fi"
import styled from 'styled-components'
import { mobile } from './responsive'
import { Link } from 'react-router-dom'
import './index.css'

const Container = styled.div``

const Wrapper = styled.nav`
    height: 4em;
    background-color: white;
    color: black;
    font-family: Urbanist;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
`

const NavLeft = styled.div`
    flex: 1;
    text-align: left;
`

const NavInput = styled.input`
    padding: 0.5em;
    width: 50%;

    ${mobile ({width: "80%"})}
`

const NavCenter = styled.div`
    flex: 1;
    text-align: center;
    font-size: 1.75em;
    font-weight: bolder;

    ${mobile ({fontSize: "1.5em"})}
`

const NavRight = styled.div`
    flex: 1;
    text-align: right;

    ${mobile ({flex: "2"})}
`

const NavLink = styled.a`
    cursor: pointer;
    margin: 0 1em;

    ${mobile ({margin: "0 0.25em"})}    
`

export default function Navbar() {
  return (
    <Container>
        <Wrapper>
            <NavLeft>
                <NavInput
                    type="text"
                    placeholder="Search">
                </NavInput>
            </NavLeft>
            <NavCenter>
                <Link to='/' style={{ 
                    textDecoration: "none",
                    color: "black"
                 }}><b>STORE.</b></Link>
            </NavCenter>
            <NavRight>
                <NavLink>
                    <Link to='/register'
                        style={{ 
                            textDecoration: "none",
                            color: "black"
                         }}>
                        Register
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to='/login'
                        style={{ 
                            textDecoration: "none",
                            color: "black"
                            }}>
                        Sign in
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to='/shoppingcart'
                        style={{ 
                            textDecoration: "none",
                            color: "black"
                            }}>
                        (0)
                        <FiShoppingCart
                            style={{ width: "1.5em",
                                    height: "1.5em" }}/>
                    </Link>
                </NavLink>
            </NavRight>
        </Wrapper>
    </Container>
  )
}
