import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import styled from 'styled-components'
import { mobile } from './responsive'

const Container = styled.div`
    height: 60vh;
    background-color: ivory;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Urbanist;
    margin-top: 0.5em;
`

const Title = styled.h2`
    font-size: 3em;
`

const Description = styled.p`
    font-size: 1.5em;
    letter-spacing: 0.1em;
    margin-bottom: 2em;

    ${mobile ({textAlign: "center"})}
`

const InputContainer = styled.div`
    display: flex;
    height: 2.5em;
    justify-content: space-between;
    width: 50%;
    border: 0.1em solid lightgrey;

    ${mobile ({width: "80%"})}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding: 1em;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.1);
    }
`

export default function Newsletter() {
  return (
    <Container>
      <Title>Our Newsletter</Title>
      <Description>Get updates about your favorite products</Description>
      <InputContainer>
        <Input 
            placeholder="Your Email" 
            type="email"/>
        <Button>
            <AiOutlineSend 
                style={{height: "1.5em", width: "1.5em", color: "white"}}/>
        </Button>
      </InputContainer>
    </Container>
  )
}
