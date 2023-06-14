import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    height: 70vh;
    margin: 0.25em;
    position: relative;
    font-family: Urbanist;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h3`
    color: white;
    font-size: 4em;

`

const Button = styled.button`
    padding: 0.5em;
    background-color: white;
    color: gray;
    font-weight: bolder;
    border-radius: 10%;
    font-family: Urbanist;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.15)
    }
`

export default function CategoriesItem({item}) {
  return (
    <Container key={item.id}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}
