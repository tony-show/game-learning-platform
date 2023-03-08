import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchProfileData } from './fetchProfileData'

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const data = {
      first: 'Анатолий',
      lastname: 'Ивашов',
      username: '',
      age: 36,
      city: '',
      country: Country.Russia,
      currency: Currency.RUB,
    }
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
