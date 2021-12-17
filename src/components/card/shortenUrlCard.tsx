import { FC, useState } from 'react'
import styled from 'styled-components'
import bg_desktop from '../../images/bg-shorten-desktop.svg';
import SecondaryButton from '../button/secondaryButtton';

const StyleContainer = styled.div<{
  error: boolean
}>`
  background: ${({ theme }) => theme.colors.primary_dark_violet};
  background-image: url(${bg_desktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 50px;
  margin-bottom: 20px;

  .form {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    input {
      height: 45px;
      width: 100%;
      border: 2px solid ${({ theme, error }) => error ? theme.colors.secondary_red : theme.colors.white};
      margin-right: 15px;
      border-radius: 5px;
      padding: 0px 20px;
      color: ${({ theme, error }) => error ? theme.colors.secondary_red : theme.colors.grayish_violet};
      font-size: 14px;
      font-weight: 500;

      :active {
        border: none;
      }
    }
  }

  .error {
    margin: 0px;
    padding: 0px;
    color: ${({ theme }) => theme.colors.secondary_red};
    font-style: italic;
    font-size: 14px;
    margin-top: -5px
  }
`;

const ShortenUrlCard: FC<{
  shortenURL: (value: string) => void;
}> = ({shortenURL}) => {
  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const submit = () => {
    if (value.length === 0) return setError(true);
    shortenURL(value)
  }
  return (
    <StyleContainer error={error}>
      <div className="form">
        <input 
          value={error ? 'Shorten a link here...' : value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Shorten a link here...'
        />
        <SecondaryButton label="Shotren it!" onClick={() => submit()} />
      </div>
      {error && (<span className="error">Please add a link</span>)}
    </StyleContainer>
  )
}

export default ShortenUrlCard
