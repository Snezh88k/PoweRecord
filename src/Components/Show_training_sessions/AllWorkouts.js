import { useSelector } from "react-redux";
import SoloWorkout from "./SoloWorkout";
import { useState } from "react";
import "./AllWorkouts.css";

const AllWorkouts = (props) => {
  const allWorkouts = useSelector(
    (state) => state.arrExerciseReducer.dayExercise
  );

  const date = new Date();
  const [i, letI] = useState(3);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateArr = [year, month, day];

  const [filter, letFilter] = useState(dateArr.slice(0, 3));

  const filterArr = allWorkouts.filter((item) => {
    return JSON.stringify(item[2].slice(0, i)) === JSON.stringify(filter);
  });

  const filterExercise = (i, ...args) => {
    letI(i);
    letFilter(args);
  };

  return (
    <div>
      <div>
        <button onClick={() => filterExercise(3, year, month, day)}>Day</button>
        <button onClick={() => filterExercise(2, year, month)}>Month</button>
        <button onClick={() => filterExercise(1, year)}>Year</button>
      </div>

      <div>
        {filterArr.map((item) => {
          return <SoloWorkout key={item[1]} data={item[0]} />;
        })}
        {/* {allWorkouts.map((item) => {
          return <SoloWorkout key={item[1]} data={item[0]} />;
        })} */}
      </div>
    </div>
  );
};

export default AllWorkouts;
