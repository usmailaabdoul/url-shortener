import React from 'react'
import { NavBar, Hero, UrlShortener, Statistics, UserAction, Footer } from '../../components'
import styled from 'styled-components'

const HomeSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  .next-section {
    margin-top: 150px;
    background: ${({ theme }) => theme.colors.background};
    padding: 0px 120px;
    padding-bottom: 100px;
  }

  .wrapper {
    padding: 0px 120px;
  }

  .footer-section {
    padding: 0px 120px;
    background: ${({ theme }) => theme.colors.dark_violet};
  }
`;

const Home = () => {
  return (
    <HomeSection>
      <div className='wrapper'>
        <div className='container'>
          <NavBar />
          <Hero />
        </div>
      </div>
      <div className='next-section'>
        <div className='container'>
          <UrlShortener />
          <Statistics />
        </div>
      </div>
      <UserAction />
      <div className='footer-section'>
        <div className='container'>
          <Footer />
        </div>
      </div>
    </HomeSection>
  )
}

export default Home
