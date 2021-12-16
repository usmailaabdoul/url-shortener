import {FC} from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{
  atFooter: boolean;
}>`
  border: none;
  width: '110px';
  height: '40px';
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 10px 0;
  
  a {
    color: ${({ theme, atFooter }) => atFooter ? theme.colors.gray : theme.colors.grayish_violet};
    font-size: 14px;
    text-decoration: none;
    font-weight: 700;
  }

  :hover {
    a {
      color: ${({ theme, atFooter}) => atFooter ? theme.colors.primary_cyan : theme.colors.dark_blue};
    }
  }

`;

const FlatButton: FC<{
  label: string,
  onClick: () => void,
  link: string,
  atFooter?: boolean,
}> = ({label, onClick, link, atFooter = false}) => {
  return (
    <StyledButton onClick={onClick} atFooter={atFooter}>
      <a href={link}>{label}</a>
    </StyledButton>
  )
}

export default FlatButton
