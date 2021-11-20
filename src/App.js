import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [listOfInfo, setListOfInfo] = useState([]);

  const addInfo = async() => {
    try{
      console.log("Llego");
      const data = await Axios.post("http://localhost:3000/api/infos", {
        name: name,
      })
    }catch(e){
      console.log(e);
    }

  };

  useEffect(() => {
    Axios.get("http://localhost:3000/api/infos")
      .then((response) => {
        setListOfInfo(response.data);
      })
      .catch(() => {
        console.log("ERR");
      });
  }, []);

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
      {listOfInfo.map((val)=>{
        return <div>{val.name}</div>
      })}
    </div>
  );
}

export default App;
