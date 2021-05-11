import styled, { css } from 'styled-components'
import * as InputFieldStyles from '../InputField/styles'

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding: 1rem 10px 1rem 10px;
`

export const FormTitle = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-weight: bold;
    color: ${theme.colors.black};
    margin-bottom: 1.5rem;
  `}
`

export const FormWrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${InputFieldStyles.InputWrapper} {
      margin-bottom: 0.6rem;
    }

    border-radius: 0.6rem;
    width: 35rem;
    margin: 0 auto;
    /* padding: 0 ${theme.spacings.medium}; */

    @media (max-width: 900px) {
      max-width: 70vw;
    }
  `}
`
export const Button = styled.button`
  ${({ theme }) => css`
    margin: 1rem auto;
    background: ${theme.colors.buttonColor};
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: 1rem 3rem;
  `}
`
export const LoadingMessage = styled.span`
  ${({ theme }) => css`
    margin: 1rem auto;
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: 1rem 3rem;
  `}
`
export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    margin: 1rem auto;
    background: ${theme.colors.bgError};
    color: ${theme.colors.error};
    border: 0;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: 1rem 3rem;
  `}
`
export const SucessMessage = styled.span`
  ${({ theme }) => css`
    margin: 1rem auto;
    background: ${theme.colors.bgSucess};
    color: ${theme.colors.sucess};
    border: 0;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: 1rem 3rem;
  `}
`
