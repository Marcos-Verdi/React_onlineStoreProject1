import React from 'react'
import styled from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'

const Info = styled.div`
    opacity: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 1em;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    &:hover ${Info} {
        opacity: 1;
    }
`

const Circle = styled.div`
    height: 200px;
    width: 200px;
    background-color: white;
    border-radius: 50%;
    position: absolute;    
`

const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    padding: 1em;
    margin: 0.5em;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease;

    &:hover {
        background-color: lightgrey;
        transform: scale(1.15)
    }
`



export default function ProductsItem({item}) {
  return (
    <Container key={item.id}>
      <Circle />
      <Image src={item.img}/>
      <Info>

        <Icon>
            <FiShoppingCart
                style={{width: "1.5em",
                        height: "1.5em",
                        cursor: "pointer"}}/>
        </Icon>
        <Icon>
            <FiSearch style={{width: "1.5em",
                            height: "1.5em",
                            cursor: "pointer"}}/>
        </Icon>
        <Icon>
            <FiHeart style={{width: "1.5em",
                            height: "1.5em",
                            cursor: "pointer"}}/>
        </Icon>

      </Info>
    </Container>
  )
}
