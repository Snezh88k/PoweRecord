import "./AllWorkouts.css";

const SoloWorkout = ({ data }) => {
  console.log("DATA", data);

  const entries = Object.entries(data);

  console.log(entries);

  let sumWeight = 0;
  let reps = 0;
  let totalWeight = 0;

  let l = entries.map((item) => {
    return (
      <div>
        <p style={{ color: "white", fontWeight: "500" }}>{item[0]}</p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {Object.entries(item[1])
            .sort((a, b) => a[0][4] - b[0][4])
            .map((ss) => {
              if (ss[0].indexOf("reps") !== -1) {
                reps = Number(ss[1]);
                totalWeight = totalWeight + reps * sumWeight;
                return (
                  <div style={{ width: "40%" }}>{`Повторений ${ss[1]}`}</div>
                );
              } else {
                sumWeight = Number(ss[1]);

                return <div style={{ width: "40%" }}>{`Вес ${ss[1]} КГ`}</div>;
              }
            })}
        </div>
      </div>
    );
  });

  return (
    <div className="blogTraining">
      {l}
      <p style={{ marginTop: "10px" }}>
        {"Общий тоннаж тренировки"}-{totalWeight}
        {"КГ"}
      </p>
    </div>
  );
};

export default SoloWorkout;
