import React from 'react'
import Announcements from './Announcements'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import Footer from './Footer'
import styled from 'styled-components'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { mobile } from './responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 0.25em;
    font-family: Urbanist;
`

const Title = styled.h1`
    text-align: center;
    font-size: 2.5em;
    letter-spacing: 0.1em;
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0  2em 2em;

    ${mobile ({ display: "flex",
                flexDirection: "column",
                alignItems: "center" })}
`

const Button = styled.button`
    font-family: Urbanist;
    padding: 1em;
    cursor: pointer;

    &:hover {
        border: 0.1em solid teal;
    }

    ${mobile ({ marginTop: "2em",
                marginBottom: "2em",
                width: "90%" })}
`

const TopTexts = styled.div`
    display: flex;

    ${mobile ({ display: "flex",
                flexDirection: "column" })}
`

const TopText = styled.p`
    margin: 0 2em;
    font-weight: bold;
    letter-spacing: 0.05em;

    ${mobile ({ marginTop: "1em",
                textAlign: "center" })}
`

const OrderContainer = styled.div`
    display: flex;

    ${mobile ({ display: "flex",
                flexDirection: "column" })}
`

const OrderInfo = styled.div`
    flex: 3;
    margin-right: 0.25em;
`

const Product = styled.div`
    display: flex;
    align-items: center;

    ${mobile ({ display: "flex",
                flexDirection: "column" })}
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    flex: 1;
    margin-right: 1em;

    ${mobile ({ width: "90%",
                marginRight: "0",
                flex: "3" })}
`

const ProductInfo = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${mobile ({ flex: "1" })}
`

const InfoItem = styled.p`
    font-size: 1.25em;
    letter-spacing: 0.1em;
    font-weight: bold;
`

const OrderQuantity = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${mobile ({ display: "flex",
                flexDirection: "row",
                flex: "1" })}
`

const QuantityCounter = styled.div`
    display: flex;
    align-items: center;
`

const QuantityButton = styled.div`
    margin-right: 0.25em;
    cursor: pointer;
`

const Count = styled.div`
    border: none;
    padding: 0.5em;
    margin-right: 0.25em;
    font-size: 1.25em;
`

const QuantityTotal = styled.p`
    font-size: 1.5em;
    letter-spacing: 0.05em;

    ${mobile ({ marginLeft: "2em" })}
`

const Hr = styled.hr`
    background-color: lightgray;
    border: none;
    height: 0.01em;
`

const Summary = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    background-color: ivory;
    padding: 1em;
    border-radius: 10px;
`

const SummaryTitle = styled.h1`
    letter-spacing: 0.1em;
`

const SummaryDetails = styled.div``

const SummaryDetail = styled.div`
    display: flex;
    justify-content: space-between;
`

const DetailCategory = styled.p`
    font-weight: bold;
    letter-spacing: 0.1em;
    font-size: ${props => props.type === "total"? "1.5em" : "em"};
`

const DetailAmount = styled.p`
    font-weight: bold;
    letter-spacing: 0.1em;
    font-size: ${props => props.type === "total"? "1.5em" : "em"};
`

const SummaryButton = styled.button`
    cursor: pointer;
    padding: 0.5em;
    font-family: Urbanist;
    font-weight: bold;
    letter-spacing: 0.1em;
    background-color: teal;
    color: white;
    margin-top: 1rem;
`

export default function ShoppingCart() {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <Title>Your Cart</Title>
        <TopContainer>
            <Button
                style={{backgroundColor: "white",
                        color: "black"}}>
                CONTINUE SHOPPING
            </Button>
            <TopTexts>
                <TopText>Shopping Bag (0)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <Button
                style={{backgroundColor: "black",
                color: "white"}}>
                CHECKOUT NOW
            </Button>   
        </TopContainer>

        <OrderContainer>

            <OrderInfo>

                <Product>
                    <Image
                        src="https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMDczMzk0NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=320&q=60">
                    </Image>
                    <ProductInfo>
                        <InfoItem>Product:</InfoItem>
                        <InfoItem>ID:</InfoItem>
                    </ProductInfo>
                    <OrderQuantity>
                        <QuantityCounter>
                            <QuantityButton>
                                <FaMinus/>
                            </QuantityButton>

                            <Count>1</Count>

                            <QuantityButton>
                                <FaPlus />
                            </QuantityButton>
                        </QuantityCounter>
                        <QuantityTotal>$ 30</QuantityTotal>
                    </OrderQuantity>
                </Product>
                <Hr/>

                <Product>
                    <Image
                        src="https://images.unsplash.com/photo-1539972891177-4a9ba4bb8d14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw0MTYzNTQ5MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=320&q=60">
                    </Image>
                    <ProductInfo>
                        <InfoItem>Product:</InfoItem>
                        <InfoItem>ID:</InfoItem>
                    </ProductInfo>
                    <OrderQuantity>
                        <QuantityCounter>
                            <QuantityButton>
                                <FaMinus/>
                            </QuantityButton>

                            <Count>1</Count>

                            <QuantityButton>
                                <FaPlus />
                            </QuantityButton>
                        </QuantityCounter>
                        <QuantityTotal>$ 30</QuantityTotal>
                    </OrderQuantity>
                </Product>
                <Hr/>

            </OrderInfo>

            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryDetails>
                    <SummaryDetail>
                        <DetailCategory type="subtotal">Subtotal:</DetailCategory>
                        <DetailAmount type="subtotal">$80</DetailAmount>
                    </SummaryDetail>
                    <SummaryDetail>
                        <DetailCategory type="shipping">Estimated Shipping:</DetailCategory>
                        <DetailAmount type="shipping">$80</DetailAmount>
                    </SummaryDetail>
                    <SummaryDetail>
                        <DetailCategory type="discount">Discount:</DetailCategory>
                        <DetailAmount type="discount">$80</DetailAmount>
                    </SummaryDetail>
                    <SummaryDetail>
                        <DetailCategory type="total">Total:</DetailCategory>
                        <DetailAmount type="total">$80</DetailAmount>
                    </SummaryDetail>
                </SummaryDetails>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>

        </OrderContainer>

      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}
