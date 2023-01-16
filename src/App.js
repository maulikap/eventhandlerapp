import './App.css';
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  function onSuscribe(event) {
    event.preventDefault();
    alert(`Welcome on board ${name}`);
  }

  function onName(event) {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <h1>Our new customer is {name}</h1>

      <form onSubmit={onSuscribe}>
        <input value={name} onChange={(event) => onName(event)} />
        <br />
        <button>Suscribe</button>
      </form>
    </div>
  );
}
