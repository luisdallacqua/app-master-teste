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
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${addBackgroundColor &&
      css`
        background-color: ${theme.colors.black};
      `}
    }
  `}
`

export default GlobalStyles
