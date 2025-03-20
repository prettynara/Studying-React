import React from "react";
<<<<<<< HEAD
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "second" },
    { id: "cg3", text: "Help third students in the course Q&A" },
  ];
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal />
      <GoalList goals={courseGoals} />
    </div>
  );
=======
import { BrowserRouter as Router, Route } from "react-router-dom";

import Users from './user/pages/Users';

const App = () => {
  return (
  <Router>
    <Route path="/" exact>
      <Users />
    </Route>
  </Router>
 );
>>>>>>> c5dac2d (Initial commit)
};

export default App;
