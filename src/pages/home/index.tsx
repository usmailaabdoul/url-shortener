import React from 'react'
import {PrimmaryButton, SecondaryButton, FlatButton, IconButton} from '../../components'
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
      <SecondaryButton label="Copied!" onClick={() => console.log('Sign up')} link="signup" />
      <FlatButton label="Features" onClick={() => console.log('Sign up')} link="signup" />
      <IconButton icon="facebook" onClick={() => console.log('Sign up')} link="signup" />
    </HomeSection>
  )
}

export default Home
