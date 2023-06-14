import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { FaAngleLeft } from 'react-icons/fa'
import styled from 'styled-components'
import "./index.css"
import { SliderItems } from './data'
import { mobile } from './responsive'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 2.5em;
  height: 2.5em;
  padding: 10px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.towards === "left" && "1em"};
  right: ${props => props.towards === "right" && "1em"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => (props.slideIndex * -100)}vw)
`;

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  font-family: Urbanist;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 3em;
`;

const Title = styled.h3`
  font-size: 4em;
`;

const Description = styled.p`
  margin: 2em 0;
  font-size: 2em;
  letter-spacing: 0.05em;
`

const Button = styled.button`
  font-size: 1.25em;
  padding: 0.75em;
  cursor: pointer;
  background-color: transparent;
  border-style: double;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export default function Slider() {

  const [slideIndex, setSlideIndex] = React.useState(0)

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  }

  return (

    <Container>

      <Arrow towards="left">
        <FaAngleLeft
          onClick={() => handleClick("left")}/>
      </Arrow>


      <Wrapper slideIndex={slideIndex}>

        {SliderItems.map(item => (
          <Slide key={item.id}>

            <ImageContainer>
              <Image src={item.img} alt="" />
            </ImageContainer>

            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>
                {item.desc}
              </Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>

          </Slide>
        ))}

      </Wrapper>


      <Arrow towards="right">
        <FaAngleRight
          onClick={() => handleClick("right")}/>
      </Arrow>
      

    </Container>
  )
}
