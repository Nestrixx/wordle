import Keyboard from "./Keyboard";
import Navbar from "./Navbar";
import "../styles/app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="gameWrapper">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
