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
    <div>
      <div style={{ display: "flex" }}>
        <p style={{ display: !!showBtn }}>
          Добавьте упражнения из списка слева
        </p>
        <Datetime />
      </div>

      {train.map((item) => {
        return <ChildCall key={item.id} data={item} onChange={handleChange} />;
      })}
      <button
        className="addInBase"
        style={{ display: showBtn }}
        onClick={addTrain}
      >
        СОХРАНИТЬ ТРЕНИРОВКУ
      </button>
    </div>
  );
};

export default ParentCall;
