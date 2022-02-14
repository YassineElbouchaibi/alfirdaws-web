import { ComponentMeta, ComponentStory } from '@storybook/react';

import BannerWidget from '.';

export default {
  title: 'Misc/BannerWidget',
  component: BannerWidget,
} as ComponentMeta<typeof BannerWidget>;

const Template: ComponentStory<typeof BannerWidget> = (args) => <BannerWidget {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  bannerImageUrl: '/uploads/banner_dcbac633e2.jpg',
};
