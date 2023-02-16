import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Link',
}
export const DefaultDark = Template.bind({})
DefaultDark.args = {
  children: 'Link',
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Primary = Template.bind({})
Primary.args = {
  children: 'Link',
  theme: AppLinkTheme.PRIMARY,
}
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Link',
  theme: AppLinkTheme.PRIMARY,
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Link',
  theme: AppLinkTheme.SECONDARY,
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  children: 'Link',
  theme: AppLinkTheme.SECONDARY,
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
