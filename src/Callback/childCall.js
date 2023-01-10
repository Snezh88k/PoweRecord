import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteExercise } from "../redux/actions";
import "./CallBack.css";

const ChildCall = ({ data, onChange }) => {
  const nameExercise = data.text;
  const id = data.id;

  //Создаем массив и из этого массива создаем новые инпуты
  const [inp, setInp] = useState([0]);
  const [col, setCol] = useState(1);

  const addSet = (e) => {
    e.preventDefault();
    const newPut = [...inp, col];
    setInp(newPut);
    setCol(col + 1);
  };

  const handleChangeChild = (event) => {
    onChange(event.target.value, nameExercise, event.target.name);
  };

  const dispatch = useDispatch();

  const exerciseDelete = () => {
    dispatch(deleteExercise(id));
  };

  return (
    <div style={{ color: "white", width: "100%" }}>
      <div style={{ display: "flex" }}>
        <p>{nameExercise}</p>
        <div className="exercise_delete" onClick={exerciseDelete}></div>
      </div>
      <div style={{ display: "flex" }}>
        <form>
          {inp.map((item, index) => {
            return (
              <input
                className="reps_input"
                type="text"
                key={item[index]}
                name={`Подход №${index + 1}`}
                onChange={handleChangeChild}
              />
            );
          })}
        </form>
        <div className="plus_set" onClick={addSet}></div>
      </div>
    </div>
  );
};

export default ChildCall;
