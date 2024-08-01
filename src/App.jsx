import { useState } from "react";
import Values from "values.js";
import FormColor from "./components/FormColor";
import DisplayColors from "./components/DisplayColors";

function App() {
  const [list, setList] = useState(new Values("red").all(5));

  return (
    <>
      <FormColor setList={setList} />
      <DisplayColors list={list} />
    </>
  );
}

export default App;
