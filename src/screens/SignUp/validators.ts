import * as yup from 'yup'

export const signupSchema = yup.object({
  email: yup
    .string()
    .trim()
    .lowercase()
    .required('Required field')
    .email('Invalid e-mail'),
  password: yup
    .string()
    .trim()
    .required('Required field')
    .min(8, 'Minimun 8 characters'),
})
