import { Currency } from 'entities/Currency'
import { StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
  test('should return data', () => {
    const data = {
      first: 'Анатолий',
      lastname: 'Ивашов',
      username: '',
      age: 36,
      city: '',
      country: Country.Russia,
      currency: Currency.RUB,
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
