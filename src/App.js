import './App.css';
import TestComponent from './components/TestComponent';
import styled, { ThemeProvider } from 'styled-components';

import Task from './components/Task';

let darkTheme = {
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
darkTheme.colors.textColor1 = darkTheme.colors.color2Yellow;
darkTheme.colors.textColor2 = darkTheme.colors.color1Red;
darkTheme.colors.iconColorPrimary = darkTheme.colors.color4LightBlue;
darkTheme.colors.iconColorSecondary = darkTheme.colors.color5Black;

let lightTheme = {
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
lightTheme.colors.textColor1 = lightTheme.colors.color2Yellow;
lightTheme.colors.textColor2 = lightTheme.colors.color1Red;

const WrapperApp = styled.section`
  background: ${(props) => props.theme.colors.color5Black};
  color: ${(props) => props.theme.colors.textColor1};

  .app {
    text-align: center;
    min-height: 100vh;
    position: relative;
  }

  .app-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }

  header {
    background-color: #282c84;
    /* height: 100px; */
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main #main-width-container {
    max-width: 1000px;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main #class-container {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */

    border: 1px solid red;
  }

  // extra space so the footer won't ever be shown over something
  main #extra-space {
    height: 1.6rem;
    border: 1px solid orange;
  }

  footer {
    height: 1.6rem;
    border: 1px solid yellow;
    position: absolute;
    width: 100%;
    bottom: 0;
  }
`;

function App() {
  let useLightTheme = false;
  return (
    <ThemeProvider theme={useLightTheme ? lightTheme : darkTheme}>
      {/* <ThemeProvider theme={darkTheme}> */}
      <WrapperApp>
        <div className="app">
          <header className="app-header">
            <p>headdderrrrrr</p>
          </header>
          <main>
            <div id="main-width-container">
              <p>main stuff here</p>
              <div id="class-container">
                <Task />
                <Task />
                <Task />
              </div>
              <TestComponent />
              <div id="extra-space"></div>
            </div>
          </main>
          <footer>footer here</footer>
        </div>
      </WrapperApp>
    </ThemeProvider>
  );
}

export default App;
