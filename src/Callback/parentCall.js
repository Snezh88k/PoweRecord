import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChildCall from "./childCall";
import { addExercise, workClean } from "../redux/actions";
import uniqid from "uniqid";
import "./CallBack.css";
import Datetime from "./data";

const ParentCall = (props) => {
  let train = useSelector((state) => state.workReducer.workout);

  console.log("Train in parentCall", train);

  const dispatch = useDispatch();

  const [nameTra, setNameTra] = useState({});

  const handleChange = (count, value, name, evName, weight) => {
    console.log("---------------------");
    console.log("count", count);
    console.log("value", value);
    console.log("name", name);
    console.log("evName", evName);
    console.log("weight", weight);
    console.log("---------------------");

    const nextCount = {
      ...weight,
      ...count,
      ...{ [evName]: value },
    };

    console.log("nextCount", nextCount);

    setNameTra({
      ...nameTra,
      ...{ [name]: nextCount },
    });
  };

  console.log("nameTra", nameTra);
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

export default ParentCall;
