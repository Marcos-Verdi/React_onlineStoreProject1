import React from 'react'
import Announcements from './Announcements'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import Footer from './Footer'
import styled from 'styled-components'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { mobile } from './responsive'

const Container = styled.div``

const Wrapper = styled.div`
    display: flex;
    padding: 2em;
    font-family: Urbanist;

    ${mobile({ display: "flex",
                flexDirection: "column",
                alignItems: "center" })}
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 90%;
    height: 100%;
    object-fit: cover;

    ${mobile ({ width: "100%"})}
`

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${mobile ({ flex: "2",
                alignItems: "center"})}
`

const InfoTitle = styled.h1`
    letter-spacing: 0.05em;
`

const Description = styled.p`
    font-size: 1.25em;

    ${mobile ({ width: "80%"})}
`

const Price = styled.div`
    font-size: 2em;
`

const FilterContainer = styled.div`
    display: flex;
    align-items: center;

    ${mobile ({ display: "flex" })}
`

const ColorLabel = styled.p`
    font-size: 2em;
    margin-right: 1em;
`

const ColorIcon = styled.div`
    height: 1em;
    width: 1em;
    border-radius: 50%;
    background-color: black;
    margin-right: 0.25em;
    border: 1px solid black;
`

const SelectLabel = styled.p`
    font-size: 2em;
    margin-left: 2em;
    margin-right: 1em;

    ${mobile ({ marginLeft: "0.5em"})}
`

const Select = styled.select`
    font-size: 1em;
    padding: 0.25em;
`

const Option = styled.option``

const PurchaseContainer = styled.div`
    display: flex;
    align-items: center;
`

const QuantityButton = styled.button`
    border: none;
    background-color: white;
    margin-right: 0.5em;
    cursor: pointer;
`

const Amount = styled.div`
    width: 1.5em;
    height: 1.5em;
    font-size: 1.1em;
    margin-right: 0.5em;
    border: 1px solid teal;
    border-radius: 10%;
    text-align: center;
`

const Button = styled.button`
    font-size: 1em;
    padding: 0.5em;
    margin-left: 2em;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }
`

export default function Product() {

    const [amount, setAmount] = React.useState(0)

    const incrementCount = () => {
        setAmount(amount + 1)
    }

    const decrementCount = () => {
        if (amount > 0) {
            setAmount(amount - 1)
        } else {
            setAmount(amount)
        }
    }

  return (
    <Container>
        <Announcements />
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1613480838954-10d9f4de0128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDc1MTMyN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            </ImgContainer>
            <InfoContainer>

                <InfoTitle>No Baker Shirt</InfoTitle>
                <Description>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available.
                </Description>
                <Price>$95</Price>
                <FilterContainer>
                    <ColorLabel>Colors</ColorLabel>
                    <ColorIcon style={{backgroundColor: "black"}}/>
                    <ColorIcon style={{backgroundColor: "blue"}}/>
                    <ColorIcon style={{backgroundColor: "white"}}/>
                    <SelectLabel>Size</SelectLabel>
                    <Select>
                        <Option selected>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </FilterContainer>
                <PurchaseContainer>
                    <QuantityButton>
                        <FaMinus
                            onClick={decrementCount}/>
                    </QuantityButton>

                    <Amount>{amount}</Amount>

                    <QuantityButton>
                        <FaPlus
                            onClick={incrementCount}/>
                    </QuantityButton>
                    <Button>PURCHASE NOW</Button>
                </PurchaseContainer>
                
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}
