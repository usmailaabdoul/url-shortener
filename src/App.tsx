import { ThemeProvider } from 'styled-components';
import './App.css'
import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import {Home} from './pages';
import {isIOS} from 'react-device-detect';
import {useIsMobileDevice} from './utils/deviceWidth';

function App() {
  const isMobile = useIsMobileDevice();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className={isIOS || isMobile ? 'mobile-wrapper' : ''}>
          <Home />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
