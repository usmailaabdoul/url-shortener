import {FC} from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{
  size: string;
  copied?: boolean;
}>`
  border: none;
  width: ${({ size }) => size === 's' ? '110px' : '170px'};
  height: ${({ size }) => size === 's' ? '40px' : '45px'};
  border-radius: ${({ size }) => size === 's' ? '4px' : '8px'};
  background-color: ${({ theme, copied }) => copied ? theme.colors.primary_dark_violet : theme.colors.primary_cyan};
  margin: 10px 0;
  
  :hover {
    background-color: ${({ theme, copied }) => copied ? theme.colors.primary_dark_violet : theme.colors.primary_cyan_light};
  }

  .label {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
  }
`;

const SecondaryButton: FC<{
  label: string,
  onClick: () => void,
  size?: 'm' | 's',
  copied?: boolean,
}> = ({label, onClick, size = 'm', copied = false}) => {
  return (
    <StyledButton onClick={onClick} size={size} copied={copied}>
      <span className="label">{label}</span>
    </StyledButton>
  )
}

export default SecondaryButton
