import theme from './theme'

type Theme = typeof theme // type inference, because theme will always be constant

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
