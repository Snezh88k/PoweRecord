import React from "react";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";
import { workCreate } from "../../redux/actions";
import "./All_exercises.css";

//Adds an exercise to a workout

function AddExercise(props) {
  const base = useSelector((state) => {
    console.log(state);
    const { ListOfExercisesReducer } = state;
    return ListOfExercisesReducer.list;
  });

  const dispatch = useDispatch();

  const putInWork = (e) => {
    const id = uniqid();
    dispatch(workCreate(base[e.target.value].text, id));
  };

  return (
    <>
      {base.map((item, index) => (
        <div key={index} style={{ display: "flex", position: "relative" }}>
          <div className="exercise">{item.text}</div>
          <div>
            <button
              className="buttonAdd plus radius"
              value={index}
              onClick={putInWork}
            ></button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AddExercise;
