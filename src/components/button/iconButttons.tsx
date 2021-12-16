import styled from 'styled-components'
import { Twitter, Facebook, Instagram, Pinterest } from '../../images/svg';

const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary_cyan};
  margin: 10px 10px;

  a {
    color: theme.colors.grayish_violet;
      svg > path {
        fill: ${({ theme }) => theme.colors.white};
    }
  }
  :hover {
    a {
      color: theme.colors.grayish_violet;
        svg > path {
          fill: ${({ theme }) => theme.colors.primary_cyan};
      }
    }
  }
`;

const StyleContainer = styled.div``;

const IconButton = () => {
  return (
    <StyleContainer>
      <StyledButton>
        <a href='###'>
          <Facebook />
        </a>
      </StyledButton>
      <StyledButton>
        <a href='###'>
          <Twitter />
        </a>
      </StyledButton>
      <StyledButton>
        <a href='###'>
          <Pinterest />
        </a>
      </StyledButton>
      <StyledButton>
        <a href='###'>
          <Instagram />
        </a>
      </StyledButton>
    </StyleContainer>
  )
}

export default IconButton
