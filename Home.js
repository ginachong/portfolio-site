import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
    background-color: #fb8aba;
`

const Banner = styled.div`
    height: 100vh;
    text-align: center;
`

const Header = styled.h1`
    color: white;
    // transform: translateY(50%)
`

export default function Home() {
    return (
        <PageContainer>
            <Banner>
                <Header>Hi, I'm Gina</Header>
            </Banner>
        </PageContainer>
    )
}
