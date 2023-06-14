import React from 'react'
import styled from 'styled-components'
import CategoriesItem from './CategoriesItem'
import { categories } from './data'
import { mobile } from './responsive'

const Container = styled.div`
    display: flex;
    padding: 1.5em;

    ${mobile({ display: "flex",
                flexDirection: "column" })}
`


export default function Categories() {
  return (
    <Container>
      {categories.map(item => (
        <CategoriesItem item={item} />
      ))}
    </Container>
  )
}
