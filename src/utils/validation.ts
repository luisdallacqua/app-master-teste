import Joi from 'joi'

const formStickerValidatorSchema = {
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  addressZip: Joi.string().required(),
  addressStreet: Joi.string().required(),
  addressNumber: Joi.string().required(),
  addressComplement: Joi.string().required(),
  addressDistrict: Joi.string().required(),
  addressCity: Joi.string().required(),
  addressState: Joi.string().required()
}

export type FormStickerErrors = {
  [key: string]: string
}

function getFormErrors(objectError: Joi.ValidationResult) {
  const errors: FormStickerErrors = {}

  if (objectError.error) {
    objectError.error.details.forEach((error) => {
      errors[error.path.join('.')] = error.message
    })
  }

  return errors
}

export type stickerFormValeus = {
  name: string
  email: string
  phone: string
  addressZip: string
  addressStreet: string
  addressNumber: string
  addressComplement: string
  addressDistrict: string
  addressCity: string
  addressState: string
}

export function formStickersValidator(values: stickerFormValeus) {
  const schema = Joi.object(formStickerValidatorSchema)

  return getFormErrors(schema.validate(values, { abortEarly: false }))
}
