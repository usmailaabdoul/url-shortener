import {FC} from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{
  size: string;
  isInNav?: boolean;
}>`
  border: none;
  width: ${({ size }) => size === 's' ? '110px' : '170px'};
  height: ${({ size }) => size === 's' ? '40px' : '45px'};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary_cyan};
  margin: 10px 0;

  :hover,
  :active {
    background-color: ${({ theme }) => theme.colors.primary_cyan_light};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-weight: 700;
  }

  @media only screen and (max-width: ${({ theme }) => theme.layouts.mobile}) {
    width: ${({ isInNav }) => isInNav ? '100%' : '170px'};
    a {
      font-size: 18px;
      font-weight: 700;
    }
  }
`;

const PrimmaryButton: FC<{
  label: string,
  onClick: () => void,
  link: string,
  size?: 'm' | 's';
  className?: string;
  isInNav?: boolean;
}> = ({label, onClick, link, size = 's', className ='', isInNav}) => {
  return (
    <StyledButton className={className} onClick={onClick} size={size} isInNav={isInNav}>
      <a href={link}>{label}</a>
    </StyledButton>
  )
}

export default PrimmaryButton
