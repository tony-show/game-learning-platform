import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from '../../types/profile'

const data = {
  first: 'Анатолий',
  lastname: 'Ивашов',
  username: '',
  age: 36,
  city: '',
  country: Country.Russia,
  currency: Currency.RUB,
}

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('without first and lastname', () => {
    const result = validateProfileData({
      ...data,
      first: '',
      lastname: '',
    })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ])
  })

  test('incorrect age', () => {
    const result = validateProfileData({
      ...data,
      age: 0,
    })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ])
  })

  test('no data', () => {
    const result = validateProfileData()

    expect(result).toEqual([
      ValidateProfileError.NO_DATA,
    ])
  })

  test('incorrect all', () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ])
  })
})
