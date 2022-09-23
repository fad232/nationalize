import React , {useEffect, useRef, useState}  from "react";

import axios from "axios";
import "./style.css"
import Flag from "./Components/Flag";


function App() {
  const [Name,setName] = useState("Nairobi"); 
  const [Data,setData] = useState([]);
  const [isLoading,setLoading] = useState(true);

  const nameRef = useRef()

  useEffect(() =>{
    setLoading(true)
    axios.get(`https://api.nationalize.io?name=${Name}`).then(response =>{ setTimeout(() => {
    console.log(response)
    setData(response.data.country)
    setLoading(false)
    console.log(Data)},1500)
    
    }).catch(err =>{
      alert(err)
    })
  },[Name])

  function AddName(event){
    event.preventDefault();
    setName(nameRef.current.value)
    nameRef.current.value = ""
  }

  return (
    <>
      <div className="mainContainer">
        
        <div className="Title">Your favorite nationality tracker !</div>
        
        <form className="myForm">
          <input type="text" ref={nameRef} className="myInput" placeholder="Type your name here ..."></input>
          <button type="submit" onClick={AddName} className="myButton">Search</button>
        </form>
        {isLoading ? <div className="Loading">Sber wahd chwya ...</div> : <>
        <div className="nameResult">{Name }</div>
        <div className="containerResult">{Data.length === 0 ? "Sber wahd chwya ..." : Data.map((each,key) => { return <Flag key={key} data={each} /> } )}</div>
        
        </>}
        <div className="Footer">Made with &#128151; by Ayoub Fadili</div>
        
      </div>
    </>
  );
}

export default App;
