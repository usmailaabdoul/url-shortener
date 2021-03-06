import styled from 'styled-components'
import IconButtons from '../../button/iconButtons';
import { Logo } from '../../../images/svg';
import { theme } from '../../../styles/theme';

const StyleContainer = styled.div`
  height: auto;
  display: flex;
  margin-top: 40px;
  margin-bottom: 70px;

  .logo {
    color: ${({ theme }) => theme.colors.white};
    flex: 1
  }
  .links {
    display: flex;
    flex: 2
  }
  .wrappers {
    flex: 1;
    display: flex;
    flex-direction: column;
    span {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 20px;
      font-weight: 700;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.gray};
      font-weight: 500;
      margin: 5px 0;

      :hover {
        color: ${({ theme }) => theme.colors.primary_cyan};
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.layouts.mobile}) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    .logo {
      margin-bottom: 50px;
    }
    .links {
      flex-direction: column;
      align-items: center;
    }

    .wrappers {
      align-items: center;
      margin-bottom: 50px;
    }
  }
`;

const Footer = () => {
  return (
    <StyleContainer className="footer-container">
      <div className="logo">
        <Logo color={theme.colors.white} />
      </div>
      <div className="links">
        <div className="wrappers">
          <span>Features</span>
          <a href="###">Link Shortening</a>
          <a href="###">Branded Links</a>
          <a href="###">Analytics</a>
        </div>
        <div className="wrappers">
          <span>Resources</span>
          <a href="###">Blogs</a>
          <a href="###">Developers</a>
          <a href="###">Support</a>
        </div>
        <div className="wrappers">
          <span>Company</span>
          <a href="###">About</a>
          <a href="###">Our team</a>
          <a href="###">Careers</a>
          <a href="###">Contact</a>
        </div>
      </div>
      <IconButtons />
    </StyleContainer>
  )
}

export default Footer;
