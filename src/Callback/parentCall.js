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

  const [count, setCount] = useState({});
  const [nameTra, setNameTra] = useState({});

  const handleChange = (value, name, evName) => {
    console.log("value", value);
    console.log("name", name);

    console.log("evName", evName);

    const nextCount = {
      ...count,
      ...{ [evName]: value },
    };

    setCount(nextCount);

    setNameTra({
      ...nameTra,
      ...{ [name]: nextCount },
    });
  };

  console.log("Count in Parent", count);
  console.log("newTra in Parent", nameTra);

  // setCount({
  //   ...count,
  //   ...{ [evName]: value },
  // });

  const addTrain = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(addExercise(nameTra, id));
    dispatch(workClean());
    setNameTra({});

    alert("Тренировка успешно добавлена");
  };

  const showBtn = train.length ? "block" : "none";

  return (
    <div style={{ position: "relative", height: "100%" }}>
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
          СОХРАНИТЬ ТРЕНИРОВКУ
        </button>
      </div>
    </div>
  );
};

export default ParentCall;
