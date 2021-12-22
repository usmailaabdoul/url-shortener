import { useState, useEffect, FC } from 'react'
import styled from 'styled-components';
import ReactModal from 'react-modal';

import PrimaryButton from '../button/primaryButton';
import FlatButton from '../button/flatButton';
import { theme } from '../../styles/theme';

const StyleContainer = styled.div``;


const modalStyles: ReactModal.Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 1000,
  },
  content: {
    top: '100px',
    left: '25px',
    right: '25px',
    bottom: 'auto',
    maxHeight: '70%',
    height: 'auto',
    border: 'none',
    background: theme.colors.primary_dark_violet,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '8px',
    outline: 'none',
    padding: '0px',
  }
};

const MobileNavModal: FC<{showModal: boolean, hideModal: () => void}> = ({showModal, hideModal}) => {
  const [isVisible, setIsVisible] = useState<boolean>(showModal)

  useEffect(() => {
    setIsVisible(showModal)
  }, [showModal]);

  return (
    <ReactModal
      isOpen={isVisible}
      closeTimeoutMS={500}
      onRequestClose={() => hideModal()}
      style={modalStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <StyleContainer className="modal-style" data-testid="mobile-nav-modal">
        <div className='buttons'>
          <FlatButton className='navModalBtn' label="Features" onClick={() => console.log('Sign up')} link="#" />
          <FlatButton className='navModalBtn' label="Pricing" onClick={() => console.log('Sign up')} link="#" />
          <FlatButton className='navModalBtn' label="Resources" onClick={() => console.log('Sign up')} link="#" />
        </div>
        <div className="auth-buttons">
          <FlatButton className='navModalBtn' label="Login" onClick={() => console.log('Sign up')} link="#" />
          <PrimaryButton isInNav='primary-btn-nav' size='m' label="Sign Up" onClick={() => console.log('Sign up')} link="#" className="signUp-btn" />
        </div>
      </StyleContainer>
    </ReactModal>
  )
}

export default MobileNavModal;
