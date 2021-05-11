import React, { useState } from 'react'
import * as S from './styles'
import InputField from '../../components/InputField/index'
import { FormatValue } from '../../utils/formatValues'
import {
  FormStickerErrors,
  formStickersValidator
} from '../../utils/validation'
import axios from 'axios'

const initialState = {
  name: '',
  email: '',
  phone: '',
  addressZip: '',
  addressStreet: '',
  addressNumber: '',
  addressComplement: '',
  addressDistrict: '',
  addressCity: '',
  addressState: ''
}

function StickerForm() {
  const [formState, setFormState] = useState(() => initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FormStickerErrors>({})
  const [apiError, setApiError] = useState('')
  const [sucessSubmit, setSucessSubmit] = useState(false)

  const handleChange = (key: string, value: string) => {
    setFormState((formState) => ({ ...formState, [key]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    //formatando os campos para "retirar" a máscara.
    const fieldsAfterFormatted = {
      ...formState,
      phone: FormatValue(formState.phone),
      addressZip: FormatValue(formState.addressZip)
    }
    const errors = formStickersValidator(fieldsAfterFormatted)

    //se houver alguma "chave" no objeto erro, nem irá consultar a API
    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setIsLoading(false)
      return
    }

    setFieldErrors({}) //evitar que os erros das outras requisições apareçam depois de solucionados

    const result = axios
      .post(
        'https://simple-api-selection.herokuapp.com/submit/',
        fieldsAfterFormatted
      )
      .then((response) => {
        console.log(response)
        setIsLoading(false)
        setSucessSubmit(true)
      })
      .catch((error) => {
        if (error.response.status === 400) {
          error.response.data.forEach((error: FormStickerErrors) => {
            setFieldErrors({}) //evitar o problema de continuar o erro de uma validação que já foi feita pelo usuário
            const field = error.field
            const message = error.error
            setFieldErrors({ ...fieldErrors, [field]: message })
            setApiError(
              'Preencha os campos marcados em vermelho conforme as instruções para que possa enviar os dados corretamente'
            )
            setIsLoading(false)
          })
        } else {
          setApiError(
            'Estamos com problemas internos no servidor. Favor tentar novamente em alguns instantes'
          )
          setIsLoading(false)
        }
      })

    console.log(result)
  }

  return (
    <S.SectionWrapper>
      {sucessSubmit ? (
        <S.SucessMessage>
          Muito bom! Você receberá seus adesivos em alguns dias
        </S.SucessMessage>
      ) : (
        <>
          <S.FormTitle>Formulário para Envio de Adesivos</S.FormTitle>
          {apiError && <S.ErrorMessage>{apiError}</S.ErrorMessage>}
          <S.FormWrapper onSubmit={handleSubmit}>
            <InputField
              autoFocus
              placeholder="Nome"
              label="Nome"
              name="name"
              value={formState.name}
              onChange={({ target: { value } }) => handleChange('name', value)}
              error={fieldErrors.name}
            />
            <InputField
              placeholder="Email@email.com"
              label="Email"
              name="email"
              value={formState.email}
              onChange={({ target: { value } }) => handleChange('email', value)}
              error={fieldErrors.email}
            />
            <InputField
              placeholder="(99) 99999-9999"
              label="Telefone"
              name="phone"
              value={formState.phone}
              onChange={({ target: { value } }) => handleChange('phone', value)}
              error={fieldErrors.phone}
            />
            <InputField
              placeholder="77777-777"
              label="CEP"
              name="addressZip"
              value={formState.addressZip}
              onChange={({ target: { value } }) =>
                handleChange('addressZip', value)
              }
              error={fieldErrors.addressZip}
            />
            <InputField
              placeholder="Rua, alameda, etc"
              label="Logradouro"
              name="addressStreet"
              value={formState.addressStreet}
              onChange={({ target: { value } }) =>
                handleChange('addressStreet', value)
              }
              error={fieldErrors.addressStreet}
            />
            <InputField
              placeholder="Número da casa, ap, etc"
              label="Número"
              name="addressNumber"
              value={formState.addressNumber}
              onChange={({ target: { value } }) =>
                handleChange('addressNumber', value)
              }
              error={fieldErrors.addressNumber}
            />
            <InputField
              label="Complemento"
              name="addressComplement"
              value={formState.addressComplement}
              onChange={({ target: { value } }) =>
                handleChange('addressComplement', value)
              }
              error={fieldErrors.addressComplement}
            />
            <InputField
              label="Bairro"
              name="addressDistrict"
              value={formState.addressDistrict}
              onChange={({ target: { value } }) =>
                handleChange('addressDistrict', value)
              }
              error={fieldErrors.addressDistrict}
            />
            <InputField
              label="Cidade"
              name="addressCity"
              value={formState.addressCity}
              onChange={({ target: { value } }) =>
                handleChange('addressCity', value)
              }
              error={fieldErrors.addressCity}
            />
            <InputField
              label="Estado"
              name="addressState"
              value={formState.addressState}
              onChange={({ target: { value } }) =>
                handleChange('addressState', value)
              }
              error={fieldErrors.addressState}
            />
            {isLoading ? (
              <S.LoadingMessage>Enviando os dados...</S.LoadingMessage>
            ) : (
              <S.Button type="submit">Enviar</S.Button>
            )}
          </S.FormWrapper>
        </>
      )}
    </S.SectionWrapper>
  )
}

export default StickerForm
