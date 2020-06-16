import React from "react";

const WorkoutCard = ({ workout, index, remove }) => {
  return (
    <div className="workout-card">
      <div className="title">{workout.title}</div>
      <div className="description">{workout.description}</div>
      <div className="reps">{workout.reps}</div>
      <div className="sets">{workout.sets}</div>
      <div className="remove">
        <button
          onClick={() => {
            remove(index);
          }}
        ></button>
      </div>
    </div>
  );
};

export default WorkoutCard;
