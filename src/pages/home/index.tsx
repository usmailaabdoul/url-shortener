import {useState} from 'react'
import { 
  NavBar,
  Hero,
  UrlShortener,
  Statistics,
  UserAction,
  Footer,
  MobileNavModal 
} from '../../components'
import styled from 'styled-components'
import {useIsMobileDevice} from '../../utils/deviceWidth';
import {isIOS} from 'react-device-detect';

const HomeSection = styled.div<{
  isMobile: boolean | null;
}>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

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
  const isMobile = useIsMobileDevice();
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <HomeSection isMobile={isMobile} data-testid='home' className='home-section'>
      <div className='wrapper'>
        <div className='container'>
          <NavBar onClick={() => setShowModal(true)}/>
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
      {(isIOS || isMobile) && (
        <MobileNavModal showModal={showModal} hideModal={() => setShowModal(false)}/>
      )}
    </HomeSection>
  )
}

export default Home
