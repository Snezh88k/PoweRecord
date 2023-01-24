import Example from "./exercise-list";
import ParentCall from "./Callback/parentCall";
import AllWorkouts from "./AllWorkouts/AllWorkouts";

import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <div className="grid_container">
        {/* <h1 className="logo">Workout</h1> */}

        <div className="example">
          <Example />
        </div>
        <div className="parentCall">
          <ParentCall />
        </div>

        <div className="allWorkouts">
          <AllWorkouts />
        </div>
      </div>
    </div>
  );
}

export default App;
