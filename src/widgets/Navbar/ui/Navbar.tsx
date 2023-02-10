import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const main = useTranslation('main')
  const about = useTranslation('about')

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.SECONDARY}
          className={cls.activeLink}
        >
          {main.t('Главная страница')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          {about.t('О сайте')}
        </AppLink>
      </div>
    </div>
  )
}
