import React from 'react'
import styled from 'styled-components'
import ProductsItem from './ProductsItem'
import { products } from './data'

const Container = styled.div`
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
`

export default function Products() {
  return (
    <Container>
      {products.map(item => (
        <ProductsItem item={item}/>
      ))}
    </Container>
  )
}
