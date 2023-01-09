import "./AllWorkouts.css";

const SoloWorkout = ({ data }) => {
  console.log("DATA", data);

  const entries = Object.entries(data);

  console.log(entries);

  let l = entries.map((item) => {
    return (
      <div>
        <h4>{item[0]}</h4>
        <div style={{ display: "flex" }}>
          {Object.entries(item[1]).map((ss) => {
            return (
              <p style={{ marginRight: "10px" }}>
                {ss[0]}: {ss[1]}
              </p>
            );
          })}
        </div>
      </div>
    );
  });

  return <div className="blogTraining">{l}</div>;
};

export default SoloWorkout;
