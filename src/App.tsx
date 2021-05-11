import React from 'react'
import { ThemeProvider } from 'styled-components'
import StickerForm from './components/Form'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StickerForm />
    </ThemeProvider>
  )
}

export default App
