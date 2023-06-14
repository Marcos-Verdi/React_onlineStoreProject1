import React from 'react'
import styled from 'styled-components'
import { mobile } from './responsive'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1500&q=80");
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Urbanist;
`

const Wrapper = styled.div`
    height: 50%;
    width: 25%;
    background-color: white;
    border-radius: 10px;
    padding: 1em;

    ${mobile ({ height: "50%",
                width: "80%" })}
`

const Title = styled.h2`
    text-align: center;
    font-size: 2em;
    letter-spacing: 0.1em;
    margin-bottom: 2em;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
`

const Input = styled.input`
    margin-bottom: 1em;
    width: 75%;
    border-radius: 10px;
    padding: 0.25em;
    font-family: Urbanist;

    ${mobile ({ width: "90%"})}
`

const Button = styled.button`
    font-size: 1.25em;
    padding: 0.5em;
    border-radius: 10px;
    border: none;
    background-color: teal;
    color: white;
    margin-left: 75%;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
        border: 1px solid black;
    }

    ${mobile ({ width: "50%",
                justifyContent: "center",
                marginBottom: "1em",
                marginLeft: "5%" })}
`

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password"/>
        </Form>
        <Button>Login</Button>
      </Wrapper>
    </Container>
  )
}
