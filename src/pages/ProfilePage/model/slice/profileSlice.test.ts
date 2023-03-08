import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { profileReducer } from 'pages/ProfilePage'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileActions } from './profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const data = {
  first: 'Анатолий',
  lastname: 'Ивашов',
  username: '',
  age: 36,
  city: '',
  country: Country.Russia,
  currency: Currency.RUB,
}

describe('profileSlice.test', () => {
  test('test readonly status', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
      .toEqual({ readonly: true })
  })

  test('test update profile', () => {
    const formData = { form: { first: '1234' } }
    const state: DeepPartial<ProfileSchema> = formData
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ first: '1234' })))
      .toEqual(formData)
  })

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({
        readonly: true,
        validateErrors: undefined,
        data,
        form: data,
      })
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateErrors: undefined,
      })
  })

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
      .toEqual({
        isLoading: false,
        readonly: true,
        data,
        form: data,
      })
  })
})
