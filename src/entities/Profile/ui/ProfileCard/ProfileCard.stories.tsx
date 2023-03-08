import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import avatar from 'shared/assets/test/img.jpg'
import { ProfileCard } from './ProfileCard'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: {
    avatar,
    first: 'Анатолий',
    lastname: 'Ивашов',
    username: '',
    age: 36,
    city: '',
    country: Country.Russia,
    currency: Currency.RUB,
  },
}

export const withError = Template.bind({})
withError.args = {
  error: 'Ошибка',
}

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true,
}
