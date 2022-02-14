import { ComponentMeta, ComponentStory } from '@storybook/react';

import { GetHomePageDataQuery_announcements } from '../../operations/queries/HomePageData';
import NewsWidget from '.';

export default {
  title: 'News/NewsWidget',
  component: NewsWidget,
} as ComponentMeta<typeof NewsWidget>;

const Template: ComponentStory<typeof NewsWidget> = (args) => <NewsWidget {...args} />;

export const Primary = Template.bind({});

const exampleNewsItem: GetHomePageDataQuery_announcements = {
  __typename: 'Announcement',
  title: 'News Item Title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  icon: {
    __typename: 'UploadFile',
    url: 'https://source.unsplash.com/random',
  },
  publishedAt: '2020-01-01',
  locale: 'en-US',
};

Primary.args = {
  announcements: [
    {
      ...exampleNewsItem,
    },
    {
      ...exampleNewsItem,
    },
    {
      ...exampleNewsItem,
    },
    {
      ...exampleNewsItem,
    },
  ],
};
