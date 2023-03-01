import { BugButton } from 'app/providers/ErrorBoundery'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

interface MainPageProps {
  className?: string
}

const MainPage = memo(({ className }:MainPageProps) => {
  const { t } = useTranslation('main')
  return (
    <div className={classNames('', {}, [className])}>
      <BugButton />
      {t('Главная')}
    </div>
  )
})
export default MainPage
