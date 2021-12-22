import { ThemeProvider } from 'styled-components';
import './App.css'
import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import {Home} from './pages';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
