import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ProfileCard } from 'entities/Profile'
import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../model/slice/profileSlice'
import { ValidateProfileError } from '../model/types/profile'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorTranslate = {
    [ValidateProfileError.NO_DATA]: t('errors.Данные не указаны'),
    [ValidateProfileError.SERVER_ERROR]: t('errors.Серверная ошибка при сохранении'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('errors.Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_AGE]: t('errors.Некорректный возраст'),
  }

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeName = useCallback((first: string) => {
    dispatch(profileActions.updateProfile({ first }))
  }, [dispatch])

  const onChangeLastname = useCallback((lastname: string) => {
    dispatch(profileActions.updateProfile({ lastname }))
  }, [dispatch])

  const onChangeAge = useCallback((value: string) => {
    const age = +value.replace(/[^\d]$/g, '')
    dispatch(profileActions.updateProfile({ age }))
  }, [dispatch])

  const onChangeCity = useCallback((city: string) => {
    dispatch(profileActions.updateProfile({ city }))
  }, [dispatch])

  const onChangeUsername = useCallback((username: string) => {
    dispatch(profileActions.updateProfile({ username }))
  }, [dispatch])

  const onChangeAvatar = useCallback((avatar: string) => {
    dispatch(profileActions.updateProfile({ avatar }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map((err) => (
          <Text key={error} theme={TextTheme.ERROR} text={validateErrorTranslate[err]} />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeName={onChangeName}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  )
})
export default ProfilePage
