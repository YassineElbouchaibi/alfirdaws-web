import { ComponentMeta, ComponentStory } from '@storybook/react';

import Footer from '.';

export default {
  title: 'Common/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
