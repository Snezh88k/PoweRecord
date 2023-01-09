import { useState } from "react";

const ChildCall = ({ data, onChange }) => {
  console.log("data in childCall", data);

  const nameExercise = data.text;

  //Создаем массив и из этого массива создаем новые инпуты
  const [inp, setInp] = useState([]);
  const [col, setCol] = useState(0);

  const addInp = (e) => {
    e.preventDefault();
    const newPut = [...inp, col];
    console.log(newPut);
    setInp(newPut);
    setCol(col + 1);
  };

  const [count, setCount] = useState({});

  const addCount = (e) => {
    setCount({
      ...count,
      ...{ [e.target.name]: e.target.value },
    });
  };

  const handleChangeChild = (event) => {
    onChange(event.target.value, nameExercise, event.target.name);
  };

  console.log("count in childCall", count);

  return (
    <div style={{ color: "white", width: "100%" }}>
      <p>{nameExercise}</p>
      <form onChange={addCount}>
        {inp.map((item, index) => {
          return (
            <input
              style={{ width: "30px", marginRight: "5px" }}
              type="text"
              key={item[index]}
              name={`Подход №${index + 1}`}
              onChange={handleChangeChild}
            />
          );
        })}

        <button className="plus" onClick={addInp}></button>
      </form>
    </div>
  );
};

export default ChildCall;
