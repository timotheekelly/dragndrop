import logo from "./logo.svg";
import "./App.css";

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
        <div className="drag-n-drop">
          {data.map((grp, grpI) => (
            <div key={grp.title} className="dnd-group">
              <h3 className="group-title">{grp.title}</h3>
              {grp.items.map((item,itemI) => (
                <div draggable key={item} className="dnd-item">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* <div className="drag-n-drop">
          <div className="dnd-group">
            <h3 className="group-title">Group 1</h3>
            <div className="dnd-item">
              <div>
                <p>ITEM 1</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 2</p>
              </div>
            </div>
          </div>
          <div className="dnd-group">
            <h3 className="group-title">Group 2</h3>
            <div className="dnd-item">
              <div>
                <p>ITEM 3</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 4</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 5</p>
              </div>
            </div>
          </div>
          <div className="dnd-group">
            <h3 className="group-title">Group 3</h3>
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default App;
