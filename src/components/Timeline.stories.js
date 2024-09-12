import React, { useState } from 'react';
import Timeline from './Timeline';

export default {
  title: 'Timeline',
  component: Timeline,
  argTypes: {
    color: { control: 'color' },
    radius: { control: 'range', min: 0, max: 50 },
    active: { control: 'boolean' },
    lineWidth: { control: 'range', min: 1, max: 10 },
    bulletSize: { control: 'range', min: 10, max: 40 },
    align: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },
};

const Template = (args) => {
  const [config, setConfig] = useState({
    color: args.color,
    radius: args.radius,
    active: args.active,
    lineWidth: args.lineWidth,
    bulletSize: args.bulletSize,
    align: args.align,
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Timeline
        items={[
          { icon: '🌿', title: 'New branch', description: 'You’ve created new branch fix-notifications from master', timeAgo: '2 hours ago' },
          { icon: '💻', title: 'Commits', description: 'You’ve pushed 23 commits to fix-notifications branch', timeAgo: '52 minutes ago' },
          { icon: '🔄', title: 'Pull request', description: 'You’ve submitted a pull request Fix incorrect notification message (#187)', timeAgo: '34 minutes ago' },
          { icon: '📝', title: 'Code review', description: 'Robert Gluesticker left a code review on your pull request', timeAgo: '12 minutes ago' },
        ]}
        config={config}
      />
      <div style={{ paddingLeft: '20px' }}>
        <h3>Timeline Config settings</h3>
        <p>Color</p>
        <input
          type="color"
          value={config.color}
          onChange={(e) => setConfig({ ...config, color: e.target.value })}
        />
        <p>Radius</p>
        <input
          type="range"
          min="0"
          max="50"
          value={config.radius}
          onChange={(e) => setConfig({ ...config, radius: parseInt(e.target.value, 10) })}
        />
        <p>Active</p>
        <input
          type="checkbox"
          checked={config.active}
          onChange={(e) => setConfig({ ...config, active: e.target.checked })}
        />
        <p>Line width</p>
        <input
          type="range"
          min="1"
          max="10"
          value={config.lineWidth}
          onChange={(e) => setConfig({ ...config, lineWidth: parseInt(e.target.value, 10) })}
        />
        <p>Bullet size</p>
        <input
          type="range"
          min="10"
          max="40"
          value={config.bulletSize}
          onChange={(e) => setConfig({ ...config, bulletSize: parseInt(e.target.value, 10) })}
        />
        <p>Align</p>
        <button onClick={() => setConfig({ ...config, align: 'left' })}>Left</button>
        <button onClick={() => setConfig({ ...config, align: 'right' })}>Right</button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  color: '#007bff',
  radius: 10,
  active: true,
  lineWidth: 4,
  bulletSize: 20,
  align: 'left',
};
