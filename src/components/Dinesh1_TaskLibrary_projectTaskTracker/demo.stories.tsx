import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dinesh1_TaskLibrary_projectTaskTracker, { Dinesh1_TaskLibrary_projectTaskTrackerProps } from './index';

// Default export using Meta
export default {
  title: 'TaskLibrary/Dinesh1_TaskLibrary_projectTaskTracker',
  component: Dinesh1_TaskLibrary_projectTaskTracker,
} as Meta<typeof Dinesh1_TaskLibrary_projectTaskTracker>;

// Template for the component story
const Template: Story<Dinesh1_TaskLibrary_projectTaskTrackerProps> = (args) => (
  <Dinesh1_TaskLibrary_projectTaskTracker {...args} />
);

// Define default story
export const Default = Template.bind({});
Default.args = {
  completedTasks: 1887,
  remainingTasks: 447,
  inProgressTasks: 76,
};
