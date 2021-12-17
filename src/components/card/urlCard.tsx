import { useState } from 'react';
import styled from 'styled-components'
import SecondaryButton from '../button/secondaryButtton';

const StyleContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 65px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  padding: 0 20px;

  .main-url {
    color: ${({ theme }) => theme.colors.dark_violet};
    font-weight: 500;
  };

  .secondary-url {
    color: ${({ theme }) => theme.colors.primary_cyan};
    font-weight: 500;
    margin-right: 20px;
  }
`;

const UrlCard = () => {
  const [copied, setCopied] = useState(false);

  return (
    <StyleContainer>
      <span className="main-url">http://localhost:3000/</span>
      <div>
        <span className="secondary-url">http://local</span>
        <SecondaryButton label={copied? "Copied!": "Copy"} onClick={() => setCopied(true)} size='s' copied={copied} />
      </div>
    </StyleContainer>
  )
}

export default UrlCard;
