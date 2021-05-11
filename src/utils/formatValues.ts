export const FormatValue = (value: string) => {
  const formatedValue = value.replace(/\D/g, '')

  return formatedValue
}
