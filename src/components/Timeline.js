import React from 'react';
import './Timeline.css'; 

const TimelineItem = ({ icon, title, description, timeAgo, color, radius, lineWidth, bulletSize, isActive, align }) => {
  return (
    <div className={`timeline-item ${align}`}>
      <div
        className="timeline-bullet"
        style={{
          backgroundColor: isActive ? color : '#ccc',
          borderRadius: `${radius}px`,
          width: `${bulletSize}px`,
          height: `${bulletSize}px`,
        }}
      >
        {icon}
      </div>
      <div className="timeline-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{timeAgo}</span>
      </div>
      <div
        className="timeline-line"
        style={{
          backgroundColor: color,
          width: `${lineWidth}px`,
        }}
      ></div>
    </div>
  );
};

const Timeline = ({ items, config }) => {
  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          timeAgo={item.timeAgo}
          color={config.color}
          radius={config.radius}
          lineWidth={config.lineWidth}
          bulletSize={config.bulletSize}
          isActive={config.active}
          align={config.align}
        />
      ))}
    </div>
  );
};

export default Timeline;
