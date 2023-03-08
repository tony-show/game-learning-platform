import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import avatar from 'shared/assets/test/img.jpg'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import ProfilePage from './ProfilePage'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
  profile: {
    form: {
      avatar,
      first: 'Анатолий',
      lastname: 'Ивашов',
      username: '',
      age: 36,
      city: '',
      country: Country.Russia,
      currency: Currency.RUB,
    },
  },
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      avatar,
      first: 'Анатолий',
      lastname: 'Ивашов',
      username: '',
      age: 36,
      city: '',
      country: Country.Russia,
      currency: Currency.RUB,
    },
  },
})]
