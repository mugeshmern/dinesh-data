import React from 'react';

// Define the props interface for the component
export interface Dinesh1_TaskLibrary_projectTaskTrackerProps {
  completedTasks: number;
  remainingTasks: number;
  inProgressTasks: number;
}

// Define the component
const Dinesh1_TaskLibrary_projectTaskTracker: React.FC<Dinesh1_TaskLibrary_projectTaskTrackerProps> = ({
  completedTasks,
  remainingTasks,
  inProgressTasks,
}) => {
  const totalTasks = completedTasks + remainingTasks + inProgressTasks;
  const completionPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div>
      <h3>Project Tasks</h3>
      <p>{completedTasks} Completed</p>
      <p>{remainingTasks} Remaining</p>
      <p>{inProgressTasks} In Progress</p>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>{completionPercentage}% Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Dinesh1_TaskLibrary_projectTaskTracker;
