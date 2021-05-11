import React, { FC, InputHTMLAttributes } from 'react'
import * as S from './styles'
import InputMask from 'react-input-mask'

// fazendo union types para não precisar explicitar todos os tipos nativos do input
export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  name?: string
  error?: string
}

const InputField: FC<InputFieldProps> = ({
  label,
  name,
  error,
  value,
  ...props
}) => {
  return (
    <S.InputWrapper error={error}>
      <S.Label htmlFor={name}>{label}</S.Label>
      {name === 'addressZip' || name === 'phone' ? (
        name === 'addressZip' ? (
          <InputMask {...props} mask="99999-999">
            {() => <S.Input type="text" {...props} />}
          </InputMask>
        ) : (
          <InputMask {...props} mask="(99) 99999-9999">
            {() => <S.Input type="text" {...props} />}
          </InputMask>
        )
      ) : (
        <S.Input type="text" id={name} value={value} {...props} />
      )}

      {error && <S.Error>{error}</S.Error>}
    </S.InputWrapper>
  )
}
export default InputField
