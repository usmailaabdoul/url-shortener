import { FC } from 'react';
import styled from 'styled-components'
import FlatButton from '../../button/flatButton';
import PrimaryButton from '../../button/primaryButton';
import IconButton from '../../button/iconButton';
import { Logo } from '../../../images/svg';
import { useIsMobileDevice } from '../../../utils/deviceWidth';
import {isIOS} from 'react-device-detect';

const StyleContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;

  .navWrapper {
    display: flex;
    align-items: center;
    flex: 1;

    .logo {
      margin-right: 30px;
    }
  }

  .auth-buttons {
    .signUp-btn {
      margin-left: 10px;
    }
  }
`;

const NavBar: FC<{
  onClick: () => void,
}> = ({ onClick }) => {
  const isMobile = useIsMobileDevice();
  console.log({isIOS})
  return (
    <StyleContainer data-testid="navbar">
      <div className='navWrapper'>
        <div className='logo'>
          <Logo />
        </div>
        {(!isIOS && !isMobile) && (
          <div className='buttons'>
            <FlatButton label="Features" onClick={() => console.log('Sign up')} link="#" />
            <FlatButton label="Pricing" onClick={() => console.log('Sign up')} link="#" />
            <FlatButton label="Resources" onClick={() => onClick()} link="#" />
          </div>
        )}
      </div>
      {(isIOS || isMobile) && (
        <IconButton icon='menu' onClick={() => onClick()}/>
      )} 
      {(!isIOS && !isMobile) && (
        <div className="auth-buttons">
          <FlatButton label="Login" onClick={() => console.log('Login')} link="#" />
          <PrimaryButton label="Sign Up" onClick={() => console.log('Sign up')} link="#" className="signUp-btn" />
        </div>
      )}
    </StyleContainer>
  )
}

export default NavBar;
