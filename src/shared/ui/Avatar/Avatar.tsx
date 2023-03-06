import { CSSProperties, useMemo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    alt,
    size,
  } = props
  const mods: Mods = {}
  const style = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size])

  return (
    <img
      style={style}
      className={classNames(cls.Avatar, mods, [className])}
      src={src}
      alt={alt}
    />
  )
}
