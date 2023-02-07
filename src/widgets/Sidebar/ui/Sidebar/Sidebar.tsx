import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((collapsed) => !collapsed)
  }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
