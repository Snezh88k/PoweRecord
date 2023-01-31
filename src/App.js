import AddExercise from "./Components/All_exercises/All_exercises";
import CurrentTraining from "./Components/Current_training/Current_training";
import AllWorkouts from "./Components/Show_training_sessions/AllWorkouts";

import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <div className="grid_container">
        <div className="example">
          <AddExercise />
        </div>
        <div className="parentCall">
          <CurrentTraining />
        </div>
        <div className="allWorkouts">
          <AllWorkouts />
        </div>
      </div>
    </div>
  );
}

export default App;
