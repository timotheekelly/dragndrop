import "./App.css";

import DragNDrop from "./components/DragNDrop";

const data = [
  {
    title: "group 1",
    items: ["1", "2"]
  },
  {
    title: "group 2",
    items: ["3", "4", "5"]
  },
  {
    title: "group 3",
    items: []
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={data} />
      </header>
    </div>
  );
}

export default App;
