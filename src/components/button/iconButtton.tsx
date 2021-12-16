import {FC} from 'react'
import styled from 'styled-components'
import icona from "../../images/icon-twitter.svg";

const StyledButton = styled.button`
  border: none;
  width: '110px';
  height: '40px';
  // background-color: ${({ theme }) => theme.colors.grayish_violet};
  margin: 10px 0;
  
  a {
    color: theme.colors.grayish_violet;
    font-size: 14px;
    text-decoration: none;
    font-weight: 700;
  }

  img {
    tint-color: theme.colors.grayish_violet;
  }
  :hover {
    a {
      color: theme.colors.dark_blue;
    }
  }

`;

const IconButton: FC<{
  icon: string,
  onClick: () => void,
  link: string,
}> = ({icon, onClick, link}) => {
  return (
    <StyledButton onClick={onClick}>
      <a href={link}>
        <img src={icona} alt="social-media-icons" />
      </a>
    </StyledButton>
  )
}

export default IconButton
