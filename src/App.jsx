import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VocabularyPractice from "./pages/VocabularyPractice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* <h1>Learn DE</h1> */}
      <VocabularyPractice />
    </div>
  );
}

export default App;
