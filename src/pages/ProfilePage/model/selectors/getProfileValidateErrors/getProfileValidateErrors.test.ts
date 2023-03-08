import { StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileError } from '../../types/profile'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors.test', () => {
  test('check validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.NO_DATA,
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.INCORRECT_USER_DATA,
        ],
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.NO_DATA,
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_USER_DATA,
    ])
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
