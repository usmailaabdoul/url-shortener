import React from 'react'
import { NavBar, Hero, UrlShortener, Statistics, PrimaryButton, SecondaryButton, FlatButton, IconButtons, BodyCard } from '../../components'
import styled from 'styled-components'

const HomeSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  .next-section {
    margin-top: 150px;
    background: ${({ theme }) => theme.colors.background};
  }
`;

const Home = () => {
  return (
    <HomeSection>
      <div className='container'>
        <NavBar />
        <Hero />
      </div>
      <div className='next-section'>
        <div className='container'>
          <UrlShortener />
          <Statistics />
          
          <PrimaryButton label="Sign Up" onClick={() => console.log('Sign up')} link="signup" />
          <SecondaryButton label="Copied!" onClick={() => console.log('Sign up')} size='s' />
          <FlatButton label="Features" onClick={() => console.log('Sign up')} link="signup" />
          <IconButtons />
        </div>
      </div>
    </HomeSection>
  )
}

export default Home
