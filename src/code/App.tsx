import Keyboard from "./Keyboard";
import Navbar from "./Navbar";
import InputBoxes from "./InputBoxes";
import "../styles/app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="gameWrapper">
        <InputBoxes />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
