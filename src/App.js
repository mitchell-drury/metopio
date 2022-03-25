import logo from "./brand.png";
import "./App.css";
import TopicsDictionary from "./TopicsDictionary";

function App() {
  return (
    <div className="App">
      <div id="logo">
        <img alt="Metopio logo" src={logo} />
      </div>
      <TopicsDictionary />
    </div>
  );
}

export default App;
