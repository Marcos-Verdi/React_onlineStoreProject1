import React from 'react'
import styled from 'styled-components'
import "./index.css"

const Container = styled.div`
    height: 2em;
    background-color: teal;
    color: white;
    font-family: Urbanist;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Announcements() {
  return (
    <Container>
      We have a 50% discount on selected items
    </Container>
  )
}
