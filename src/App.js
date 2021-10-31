import './App.css';
import TestComponent from './components/TestComponent';
import styled, { ThemeProvider } from 'styled-components';

const darkTheme = {
  colors: {
    primary: `yellow`,
    secondary: `red`,
    color1Red: `#ffa69e`,
    color2Yellow: `#faf3dd`,
    color3Green: `#b8f2e6`,
    color4LightBlue: `#aed9e0`,
    color5Black: `#1c1d22`,
    // color5Black: `#4b4f5b`,
    // color5Black: `#5e6472`,
    // https://colorhex.net/5e6472 has great shades
  },
};
const lightTheme = {
  colors: {
    primary: `lightyellow`,
    secondary: `lightred`,
    color1Red: `#11a69e`,
    color2Yellow: `#11f3dd`,
    color3Green: `#11f2e6`,
    color4LightBlue: `#11d9e0`,
    color5Black: `#111122`,
    // color5Black: `#4b4f5b`,
    // color5Black: `#5e6472`,
    // https://colorhex.net/5e6472 has great shades
  },
};

const WrapperApp = styled.section`
  background: ${(props) => props.theme.colors.color5Black};
`;
function App() {
  let useLightTheme = false;
  return (
    <ThemeProvider theme={useLightTheme ? lightTheme : darkTheme}>
      {/* <ThemeProvider theme={darkTheme}> */}
      <WrapperApp>
        <div className="App">
          <header className="App-header">
            <p>headdderrrrrr</p>
          </header>
          <main>
            <p>main stuff here</p>
            <TestComponent />
          </main>
          <footer>footer here</footer>
        </div>
      </WrapperApp>
    </ThemeProvider>
  );
}

export default App;
