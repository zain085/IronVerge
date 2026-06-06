import React from 'react';

const WorkoutSessions = () => {
  const bootcamps = [
    {
      title: "Strength & Conditioning",
      desc: "Focus on heavy lifts and functional movements to build a solid foundation of power."
    },
    {
      title: "HIIT & Cardio Blast",
      desc: "Torch calories with high-intensity intervals designed to skyrocket your endurance."
    },
    {
      title: "Mobility & Recovery",
      desc: "Enhance your range of motion and reduce injury risk with guided stretching and flow."
    },
    {
      title: "Bodyweight Mastery",
      desc: "Learn to control your own weight with advanced calisthenics and core stability work."
    }
  ];

  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Tailored fitness goals for strength, endurance, and flexibility. 
          Join IronVerge and transform your results today.
        </p>
        <img src="/img5.jpg" alt="Workout Sessions" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          High-energy sessions built to push your limits and connect you with 
          a community of like-minded athletes.
        </p>
        <div className="bootcamps">
          {bootcamps.map((item, index) => (
            <div key={index}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;