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
    onChange(
      count,
      event.target.value,
      nameExercise,
      event.target.name,
      weight
    );
  };

  const dispatch = useDispatch();

  //Удаляем упражение из тренировки по ID
  const exerciseDelete = () => {
    dispatch(deleteExercise(id));
  };

  const [count, setCount] = useState({});
  const [weight, setWeight] = useState({});

  // const addCount = (e) => {
  //   setCount({
  //     ...count,
  //     ...{ [e.target.name]: e.target.value },
  //   });

  // const [aaa, setAAA] = useState();

  const addCount = (e) => {
    console.log("input", col);
    if (e.target.name.indexOf("wght") !== -1) {
      // console.log(`${e.target?.name}`);
      const aaa = e.target?.value;
      console.log("aaa", aaa);
      setWeight({
        ...weight,
        ...{ [e.target.name]: aaa },
      });
    } else {
      setCount({
        ...count,
        ...{ [e.target.name]: e.target.value },
      });
    }

    // setGlobal({
    //   ...global,
    //   ...{[aaa]: {weight, count}}
    // })
    // console.log
  };

  // console.log("count", count);
  // console.log("weight", weight);

  return (
    <div style={{ color: "white", width: "100%" }}>
      <div style={{ display: "flex" }}>
        <p>{nameExercise}</p>
        <div className="exercise_delete" onClick={exerciseDelete}></div>
      </div>
      <div style={{ display: "flex", marginLeft: "10px" }}>
        <div style={{ marginRight: "5px" }}>
          <p>Weight</p>
          <p>Reps</p>
        </div>
        <form onChange={addCount}>
          {inp.map((item, index) => {
            return (
              <div style={{ display: "inline-block" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    className="reps_input"
                    type="text"
                    key={item[index]}
                    name={`wght${index + 1}`}
                    onChange={handleChangeChild}
                  />
                  <input
                    className="reps_input"
                    type="text"
                    key={item[index]}
                    name={`reps${index + 1}`}
                    onChange={handleChangeChild}
                  />
                </div>
              </div>
            );
          })}
        </form>
        <div className="plus_set" onClick={addSet}></div>
      </div>
      <span></span>
    </div>
  );
};

export default ChildCall;
