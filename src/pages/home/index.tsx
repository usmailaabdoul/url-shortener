import React from 'react'
import {PrimmaryButton, SecondaryButton, FlatButton, IconButtons, ShortenUrlCard, UrlCard, BodyCard} from '../../components'
import styled from 'styled-components'

const HomeSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <HomeSection>
      <PrimmaryButton label="Sign Up" onClick={() => console.log('Sign up')} link="signup" />
      <SecondaryButton label="Copied!" onClick={() => console.log('Sign up')} size='s' />
      <FlatButton label="Features" onClick={() => console.log('Sign up')} link="signup" />
      <IconButtons />

      <ShortenUrlCard shortenURL={(value: string) => console.log(value)}/>
      <UrlCard />
      <BodyCard />
    </HomeSection>
  )
}

export default Home
