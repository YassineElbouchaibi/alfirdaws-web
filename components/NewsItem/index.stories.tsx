import { ComponentMeta, ComponentStory } from '@storybook/react';

import NewsItem from '.';

export default {
  title: 'News/NewsItem',
  component: NewsItem,
} as ComponentMeta<typeof NewsItem>;

const Template: ComponentStory<typeof NewsItem> = (args) => <NewsItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'News Item Title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
    ' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
    ' eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  imageUrl: 'https://source.unsplash.com/random',
  publishedAt: '2020-01-01',
};
