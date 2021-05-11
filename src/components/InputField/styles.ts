import styled, { css } from 'styled-components'
import { InputFieldProps } from './index'

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    border: 0.2rem solid;
    border-radius: 0.4rem;
    padding: 0.6rem;
    margin: 0 auto;
    width: 100%;
    border-color: ${theme.colors.whiteInput};
    outline: none;
    :focus {
      border-color: ${theme.colors.blue};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
  `}
`

const wrapperModifiers = {
  error: () => css`
    ${Input} {
      border-color: tomato;
    }
  `
}
type InputWrapperProps = InputFieldProps

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ error }) => css`
    ${error && wrapperModifiers.error()}
  `}
`
