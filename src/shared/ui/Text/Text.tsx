import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}
export enum AlignText {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: AlignText
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = AlignText.LEFT,
  } = props

  const additional = [
    className,
    cls[theme],
    cls[align],
  ]

  return (
    <div className={classNames(cls.Text, {}, additional)}>
      {title && <div className={cls.title}>{title}</div>}
      {text && <div className={cls.text}>{text}</div>}
    </div>
  )
})
