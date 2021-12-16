import {FC} from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{
  size: string
}>`
  border: none;
  width: ${({ size }) => size === 's' ? '110px' : '150px'};
  height: ${({ size }) => size === 's' ? '40px' : '45px'};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary_cyan};
  margin: 10px 0;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary_cyan_light};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-weight: 700;
  }
`;

const PrimmaryButton: FC<{
  label: string,
  onClick: () => void,
  link: string,
  size?: 'm' | 's'
}> = ({label, onClick, link, size = 's'}) => {
  return (
    <StyledButton onClick={onClick} size={size}>
      <a href={link}>{label}</a>
    </StyledButton>
  )
}

export default PrimmaryButton
