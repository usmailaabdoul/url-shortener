import styled from 'styled-components'
import PrimaryButton from '../../button/primaryButton';
import bg_desktop from '../../../images/bg-boost-desktop.svg';

const StyleContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary_dark_violet};
  background-image: url(${bg_desktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.font.primary};
  }
`;

const UserAction = () => {
  return (
    <StyleContainer>
      <h1>Boost your links today</h1>
      <PrimaryButton label="Get Started" onClick={() => console.log('Get Started')} link="#" size='m' />
    </StyleContainer>
  )
}

export default UserAction;
