import { useSelector } from "react-redux";
import SoloWorkout from "./SoloWorkout";

const AllWorkouts = (props) => {
  const allWorkouts = useSelector(
    (state) => state.arrExerciseReducer.dayExercise
  );
  console.log("allWorkouts", allWorkouts);

  return (
    <div>
      <div>
        {allWorkouts.map((item) => {
          console.log("Название тренировки", item[0]);
          console.log("Айди тренировки", item[1]);
          return <SoloWorkout key={item[1]} data={item[0]} />;
        })}
      </div>
    </div>
  );
};

export default AllWorkouts;
