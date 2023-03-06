import { Country, CountrySelect } from 'entities/Country'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Profile } from 'pages/ProfilePage'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { AlignText, Text, TextTheme } from 'shared/ui/Text/Text'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string | undefined
  readonly?: boolean
  onChangeName: (value: string) => void
  onChangeLastname: (value: string) => void
  onChangeAge: (value: string) => void
  onChangeCity: (value: string) => void
  onChangeUsername: (value: string) => void
  onChangeAvatar: (value: string) => void
  onChangeCurrency: (value: Currency) => void
  onChangeCountry: (value: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeName,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props
  const { t } = useTranslation(['profile', 'errors'])

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [cls.loading, className])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [cls.loading, className])}>
        <Text
          theme={TextTheme.ERROR}
          align={AlignText.CENTER}
          title={t('Произошла ошибка', { ns: 'errors' })}
          text={t('Попробуйте обновить страницу', { ns: 'errors' })}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.avatarWrapper}>
        <Avatar src={data?.avatar} alt={data?.username} />
      </div>
      <div className={cls.data}>
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.first}
          placeholder={t('Имя', { ns: 'profile' })}
          onChange={onChangeName}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Фамилия', { ns: 'profile' })}
          onChange={onChangeLastname}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.age}
          placeholder={t('Возраст', { ns: 'profile' })}
          onChange={onChangeAge}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.city}
          placeholder={t('Город', { ns: 'profile' })}
          onChange={onChangeCity}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.username}
          placeholder={t('Никнейм', { ns: 'profile' })}
          onChange={onChangeUsername}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.avatar}
          placeholder={t('Ссылка на аватар', { ns: 'profile' })}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  )
}
