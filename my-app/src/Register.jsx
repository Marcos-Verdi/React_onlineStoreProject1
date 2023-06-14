import React from 'react'
import styled from 'styled-components'
import { mobile } from './responsive'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxOTQyMDgyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=fit&q=60");
`

const Wrapper = styled.div`
    height: 60%;
    width: 50%;
    background-color: white;
    padding: 1em;
    border-radius: 10px;
    font-family: Urbanist;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${mobile ({ width: "80%",
                height: "75%"})}
`

const Title = styled.h2`
    text-align: center;
    font-size: 2em;
    letter-spacing: 0.05em;

    ${mobile ({ fontSize: "1.25em"})}
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

    ${mobile ({ display: "flex",
                flexDirection: "column",
                alignItems: "center"})}
`

const Input = styled.input`
    flex: 1;
    margin: 1em;
    padding: 0.5em;
    min-width: 40%;
    border-radius: 10px;
    font-family: Urbanist;

    ${mobile ({ margin: "0.25em",
                width: "90%"})}
`

const Agreement = styled.input`
    text-align: center;
    font-size: 1.25em;
    letter-spacing: 0.05em;
    margin-right: 1rem;
`

const Button = styled.button`
    font-size: 1.05em;
    padding: 0.5em;
    border: none;
    border-radius: 10px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-left: 75%;
    font-family: Urbanist;

    ${mobile ({ margin: "0",
                width: "98%",
                justifyContent: "center"})}
`

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="Fisrt Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Uswrname" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
        </Form>
        <Agreement type="checkbox" />
        <Button>CREATE ACCOUNT</Button> 
      </Wrapper>
    </Container>
  )
}
