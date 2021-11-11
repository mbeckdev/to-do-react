let darkTheme = {
  colors: {
    primary: `yellow`,
    secondary: `red`,
    color1Red: `#ffa69e`,
    color2Yellow: `#faf3dd`,
    color3Green: `#b8f2e6`,
    color4LightBlue: `#aed9e0`,
    color5Black: `#1c1d22`,
    color5BlackLighter1: `#2e3138`,
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
    color5BlackLighter1: `#2e3138`,
    // color5Black: `#4b4f5b`,
    // color5Black: `#5e6472`,
    // https://colorhex.net/5e6472 has great shades
  },
};
lightTheme.colors.textColor1 = lightTheme.colors.color2Yellow;
lightTheme.colors.textColor2 = lightTheme.colors.color1Red;
lightTheme.colors.iconColorPrimary = lightTheme.colors.color4LightBlue;
lightTheme.colors.iconColorSecondary = lightTheme.colors.color5Black;

export { darkTheme, lightTheme };
