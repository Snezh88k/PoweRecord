import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import "./test.css";
import uniqid from "uniqid";
import { workCreate } from "./redux/actions";

function Example(props) {
  const base = useSelector((state) => {
    const { testReducer } = state;
    return testReducer.tests;
  });

  console.log("base", base);
  const dispatch = useDispatch();

  const stateTest = useSelector((state) => {
    console.log("stateTest>>>", state);
  });

  const putInWork = (e) => {
    const id = uniqid();
    dispatch(workCreate(base[e.target.value].text, id));
    console.log(stateTest);
    console.log("WORKCREATE", base);
  };

  const aa = [1, 2, 3, 4, 5];

  return (
    <>
      {base.map((item, index) => (
        <div style={{ display: "flex", position: "relative" }}>
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

export default Example;
