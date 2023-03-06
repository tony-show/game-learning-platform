import React from 'react'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  path: string;
  text: string;
  i18nNs: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    icon: MainIcon,
    text: 'Главная',
    i18nNs: 'main',
  },
  {
    path: RoutePath.about,
    icon: AboutIcon,
    text: 'О сайте',
    i18nNs: 'about',
  },
  {
    path: RoutePath.profile,
    icon: ProfileIcon,
    text: 'Профиль',
    i18nNs: 'profile',
    authOnly: true,
  },
]
