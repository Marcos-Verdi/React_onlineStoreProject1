import React from 'react'
import Announcements from './Announcements'
import Navbar from './Navbar'
import Products from './Products'
import Newsletter from './Newsletter'
import Footer from './Footer'
import styled from 'styled-components'
import { mobile } from './responsive'

const Container = styled.div`
    font-family: Urbanist;
    margin: 0;
`

const Title = styled.h2`
    text-align: center;
    font-size: 3em;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobile ({ alignItems: "flex-start"})}
`

const Filter = styled.div`
    padding: 1em;

    ${mobile ({ display: "flex",
                flexDirection: "column"})}
`

const FilterText = styled.span`
    font-size: 1.5em;
    margin-right: 1em;

    ${mobile ({ marginBottom: "1em"})}
`

const Select = styled.select`
    font-size: 1em;
    padding: 0.1em;

    ${mobile ({ marginBottom: "1em"})}
`

const Option = styled.option``

export default function ProductList() {
  return (
    <Container>
        <Announcements />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Gray</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Price</Option>
                    <Option>Newest</Option>
                    <Option>Season</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}
