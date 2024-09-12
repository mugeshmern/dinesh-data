import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TaskDashboard = ({ completed, remaining, inProgress }) => {
  const totalTasks = completed + remaining + inProgress;
  const completionPercentage = Math.round((completed / totalTasks) * 100);

  return (
    <div style={{ border: '1px solid #e1e1e1', padding: '20px', borderRadius: '8px', width: '300px' }}>
      <h3>Project tasks</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>{completed}</h2>
          <p>Completed</p>
          <p>{remaining} Remaining</p>
          <p>{inProgress} In progress</p>
        </div>
        <div style={{ width: '80px', height: '80px' }}>
          <CircularProgressbar
            value={completionPercentage}
            text={`${completionPercentage}%`}
            styles={buildStyles({
              pathColor: `#007bff`,
              textColor: '#000',
              trailColor: '#d6d6d6',
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;
