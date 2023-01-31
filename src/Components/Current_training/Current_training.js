import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChildCall from "./Added_exercise";
import { addExercise, workClean } from "../../redux/actions";
import uniqid from "uniqid";
import "./Current_training.css";
import Datetime from "./Date";

const CurrentTraining = (props) => {
  let train = useSelector((state) => state.workoutReducer.workout);

  const dispatch = useDispatch();

  const [nameTra, setNameTra] = useState({});

  const handleChange = (count, value, name, evName, weight) => {
    const nextCount = {
      ...weight,
      ...count,
      ...{ [evName]: value },
    };

    setNameTra({
      ...nameTra,
      ...{ [name]: nextCount },
    });
  };

  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const minutes = date.getMinutes();
  const dateArr = [year, month, day, minutes];

  const addTrain = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(addExercise(nameTra, id, dateArr));
    dispatch(workClean());
    setNameTra({});

    console.log("Тренировка успешно добавлена");
  };

  const showBtn = train.length ? "block" : "none";

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <p style={{ margin: "0 auto 10px 10px" }}>Добавьте упражнения.</p>
        <div style={{ marginLeft: "auto", marginRight: "10px" }}>
          <Datetime />
        </div>
      </div>
      <div style={{ marginBottom: "50px" }}>
        {train.map((item) => {
          return (
            <ChildCall key={item.id} data={item} onChange={handleChange} />
          );
        })}
      </div>
      <div className="saveExerciseDiv">
        <button
          className="saveExercise"
          style={{ display: showBtn }}
          onClick={addTrain}
        >
          Save a workout
        </button>
      </div>
    </div>
  );
};

export default CurrentTraining;
