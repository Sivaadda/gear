import React from 'react';

function AboutUs() {
  return (
    <main>
      <section>
        <h2>Welcome to My Robotics Project</h2>
        <p>This project is dedicated to exploring the fascinating world of robotics. Here, you'll find information about various robotic projects, research, and innovations.</p>
      </section>
      <section>
        <h2>Featured Robots</h2>
        <div className="robot-card">
          <img src="img/robot1.jpg" alt="Robot 1" />
          <h3>Robot 1</h3>
          <p>A description of Robot 1 and its capabilities.</p>
        </div>
        <div className="robot-card">
          <img src="img/robot2.jpg" alt="Robot 2" />
          <h3>Robot 2</h3>
          <p>A description of Robot 2 and its capabilities.</p>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
