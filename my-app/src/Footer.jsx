import React from 'react'
import { RiMapPin2Fill } from 'react-icons/ri'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'
import { RiVisaLine } from 'react-icons/ri'
import { FaCcMastercard } from 'react-icons/fa'
import { FaCcAmex } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import { mobile } from './responsive'

const Container = styled.div`
    display: flex;
    font-family: Urbanist;
    justify-content: flex-start;
    padding: 1em;

    ${mobile ({display: "flex",
                flexDirection: "column"})}
`

const Left = styled.div`
    flex: 1;
    margin-right: 1em;
`

const Logo = styled.h1`
    marginBottom: 1rem;`

const Description = styled.p``

const IconContainer = styled.div`
    display: flex;
`

const Icon = styled.div`
    margin: 0.5em;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;

    ${mobile ({display: "none"})}
`

const ListTitle = styled.h2`
    letter-spacing: 0.1em;
    marginBottom: 1rem;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
`

const ListItem = styled.li`
    margin-bottom: 0.5em;
    width: 50%;
`

const Right = styled.div`
    flex: 1;
`

const ContactTitle = styled.h2`
    letter-spacing: 0.1em;
    marginBottom: 1rem;
`

const ContactItem = styled.div`
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
`

const PaymentIcons = styled.div`
    display: flex;
`

const PayIcon = styled.div`
    margin: 0.5em;
`


export default function Footer() {
  return (
    <Container>

        <Left>
            <Logo>STORE.</Logo>
            <Description>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
            used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            Lorem ipsum may be used as a placeholder before final copy is available.
            </Description>
            <IconContainer>
                <Icon>
                    <FaInstagram 
                        style={{height: "1.5em", width: "1.5em"}}/>
                </Icon>
                <Icon>
                    <FaPinterest
                        style={{height: "1.5em", width: "1.5em"}}/>
                </Icon>
                <Icon>
                    <FaTwitter
                        style={{height: "1.5em", width: "1.5em"}}/>
                </Icon>
            </IconContainer>
        </Left>


        <Center>
            <ListTitle>Useful Links</ListTitle>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Return Item</ListItem>
            </List>
        </Center>


        <Right>
            <ContactTitle>Contact</ContactTitle>
            <ContactItem>
                <RiMapPin2Fill 
                    style={{marginRight: "1em"}}/>
                    23 Boston Rd., Greenwhich, CT.
            </ContactItem>
            <ContactItem>
                <BsTelephoneFill 
                    style={{marginRight: "1em"}}/>
                    212-561-2378
            </ContactItem>
            <ContactItem>
                <MdOutlineMail 
                    style={{marginRight: "1em"}}/>
                    contact@store.com
            </ContactItem>
            <PaymentIcons>
                <PayIcon>
                    <RiVisaLine
                        style={{height: "2em", width: "2em"}}/>
                </PayIcon>
                <PayIcon>
                    <FaCcMastercard
                        style={{height: "2em", width: "2em"}}/>
                </PayIcon>
                <PayIcon>
                    <FaCcAmex
                        style={{height: "2em", width: "2em"}}/>
                </PayIcon>
            </PaymentIcons>
        </Right>

    </Container>
  )
}
