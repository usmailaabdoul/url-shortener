import {FC} from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{
  size: string;
  copied?: boolean;
}>`
  border: none;
  width: ${({ size }) => size === 's' ? '110px' : '150px'};
  height: ${({ size }) => size === 's' ? '40px' : '45px'};
  border-radius: ${({ size }) => size === 's' ? '4px' : '8px'};
  background-color: ${({ theme, copied }) => copied ? theme.colors.primary_dark_violet : theme.colors.primary_cyan};
  margin: 10px 0;
  
  :hover {
    background-color: ${({ theme, copied }) => copied ? theme.colors.primary_dark_violet : theme.colors.primary_cyan_light};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-weight: 700;
  }
`;

const SecondaryButton: FC<{
  label: string,
  onClick: () => void,
  link: string,
  size?: 'm' | 's',
  copied?: boolean,
}> = ({label, onClick, link, size = 's', copied = false}) => {
  return (
    <StyledButton onClick={onClick} size={size} copied={copied}>
      <a href={link}>{label}</a>
    </StyledButton>
  )
}

export default SecondaryButton
