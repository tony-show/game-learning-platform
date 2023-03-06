import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)
  const editBtnTxt = readonly ? 'Редактировать' : 'Отменить'
  const btnTheme = readonly ? ButtonTheme.OUTLINE : ButtonTheme.OUTLINE_RED

  const onCancelEdit = useCallback(() => {
    if (readonly) {
      dispatch(profileActions.setReadonly(false))
    } else {
      dispatch(profileActions.cancelEdit())
    }
  }, [dispatch, readonly])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      <div className={cls.buttons}>
        <Button
          onClick={onCancelEdit}
          theme={btnTheme}
        >
          {t(editBtnTxt)}
        </Button>
        {!readonly && (
          <Button onClick={onSave}>{t('Сохранить')}</Button>
        )}
      </div>
    </div>
  )
}
