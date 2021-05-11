import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  addBackgroundColor?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme, addBackgroundColor }) => css`
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue';
      font-size: 1.6rem;
      background-color: ${theme.colors.white};
      ${addBackgroundColor &&
      css`
        background-color: ${theme.colors.black};
      `}
    }
  `}
`

export default GlobalStyles
