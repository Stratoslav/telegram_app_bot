import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const onCloseApp = () => {
    tg.close();
  };
  return (
    <div className="App">
      work
      <button onClick={onCloseApp}>Close</button>
    </div>
  );
}

export default App;
