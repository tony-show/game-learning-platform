import { BugButton } from 'app/providers/ErrorBoundery'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = memo(() => {
  const { t } = useTranslation('main')
  return (
    <div>
      <BugButton />
      {t('Главная')}
    </div>
  )
})
export default MainPage
