// src/components/TaskDashboard.stories.js
import React from 'react';
import TaskDashboard from './TaskDashboard';

export default {
  title: 'TaskDashboard',
  component: TaskDashboard,
};

const Template = (args) => <TaskDashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
  completed: 1887,
  remaining: 447,
  inProgress: 76,
};
