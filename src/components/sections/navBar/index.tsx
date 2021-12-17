import styled from 'styled-components'
import logo from '../../../images/logo.svg';
import FlatButton from '../../button/flatButton';
import PrimaryButton from '../../button/primaryButton';

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

const NavBar = () => {
  return (
    <StyleContainer>
      <div className='navWrapper'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='buttons'>
          <FlatButton label="Features" onClick={() => console.log('Sign up')} link="#" />
          <FlatButton label="Pricing" onClick={() => console.log('Sign up')} link="#" />
          <FlatButton label="Resources" onClick={() => console.log('Sign up')} link="#" />
        </div>
      </div>
      <div className="auth-buttons">
        <FlatButton label="Login" onClick={() => console.log('Sign up')} link="#" />
        <PrimaryButton label="Sign Up" onClick={() => console.log('Sign up')} link="#" className="signUp-btn" />
      </div>
    </StyleContainer>
  )
}

export default NavBar;
