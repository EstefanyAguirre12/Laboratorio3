import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");

  const addInfo = () => {
    Axios.post("http://localhost:3000/api/infos", {
      name: name,
    }).then(() => {
      alert("Si");
    }).catch(()=>{
      alert("NO");
    });
  };

  return (
    <div className="App">
      <div className="inputs">
        <input type="text" placeholder="Isertar aqui" 
          onChange={(event) => {
              setName(event.target.value);
            }}
        /> 
        <button  onClick={addInfo}>Agregar</button> 
      </div>
    </div>
  );
}

export default App;
