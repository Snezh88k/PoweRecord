import "./test.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testCreate } from "./redux/actions";

import uniqid from "uniqid";

function Test() {
  const [text, setText] = useState("");
  //   Маппинг значения из Store
  const test = useSelector((state) => {
    console.log("redux State in Test>>>", state);
    const { testReducer } = state;
    return testReducer.tests;
  });
  console.log("TEST>>>>", test);

  const dispatch = useDispatch();

  const settt = (e) => {
    setText(e.target.value);
  };

  const alolo = () => {
    const id = uniqid();
    dispatch(testCreate(text, id));
    console.log("Dispatch ", test);
  };

  return (
    <div className="testDiv">
      {"test"}
      <input className="input" type="text" value={text} onChange={settt} />
      <button onClick={alolo}> ЗАДИСПАТЧИТЬ</button>
      <div>ЛИСТ:</div>
    </div>
  );
}

export default Test;
