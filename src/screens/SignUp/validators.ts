import * as yup from 'yup'

export const signupSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required('Required field')
    .min(3, 'Minimun 3 characters'),
  lastName: yup
    .string()
    .trim()
    .required('Required field')
    .min(3, 'Minimun 3 characters'),
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
  isChecked: yup
    .bool()
    .default(false)
    .oneOf([true], 'Checkbox selection is required')
})
