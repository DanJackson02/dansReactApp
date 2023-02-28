import { useState } from "react";
//import renameMe from "./components/renameMe"
import "./App.css"

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
          <h1>State Demo</h1>
          <CountDisplay count={count} setCount={setCount} />
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default App