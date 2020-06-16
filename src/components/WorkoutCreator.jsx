import React from "react";
import WorkoutCard from "./WorkoutCard";

class WorkoutCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      workouts: [
        {
          title: "30x 2x",
          description: "Squats",
          reps: "10",
          sets: "5",
        },
      ],
    };
  }

  addWorkout = () => {
    const newWorkoutList = [
      ...this.state.workouts,
      { title: this.state.title, description: this.state.description },
    ];
    this.setState({ workouts: newWorkoutList, title: "", description: "" });
  };

  removeWorkout = (i) => {
    let newWorkoutList = this.state.workouts;
    newWorkoutList.splice(i, 1);
    this.setState({ workouts: newWorkoutList });
  };

  changeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  changeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <div className="workout">
        <div className="workout-body">
          {this.state.workouts.map((eaWorkout, i) => (
            <WorkoutCard
              remove={this.removeWorkout}
              workout={eaWorkout}
              index={i}
            />
          ))}
        </div>
        <div className="control-nav">
          <input onChange={this.changeTitle} value={this.state.title} />
          <input
            onChange={this.changeDescription}
            value={this.state.description}
          />
          <button onClick={this.addWorkout} />
        </div>
      </div>
    );
  }
}

export default WorkoutCreator;
