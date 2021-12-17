import styled from 'styled-components'
import ShortenUrlCard from '../../card/shortenUrlCard';
import UrlCard from '../../card/urlCard';

const StyleContainer = styled.div`
  margin-top: -75px;
  margin-bottom: 100px;
`;

const UrlShortener = () => {
  return (
    <StyleContainer>
      <ShortenUrlCard shortenURL={(value: string) => console.log(value)} />
      <UrlCard />
    </StyleContainer>
  )
}

export default UrlShortener;
