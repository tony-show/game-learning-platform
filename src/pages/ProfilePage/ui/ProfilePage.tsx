import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ProfileCard } from 'entities/Profile'
import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly'
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../model/slice/profileSlice'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)

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
