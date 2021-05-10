import theme from './theme'

type Theme = typeof theme // type inference, because theme will always be constant

declare module 'styled-components' {

    export interface DefaultTheme extends Theme{}
}