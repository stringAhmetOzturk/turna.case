import { useState } from "react";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import Popup from "./components/popup/Popup";

function App() {
  const [clicked,setClicked]= useState(false)
  return (
    <div>
      <Header/>
      <Body click={clicked} open={()=>{setClicked(true)}}/>
      <Popup click={clicked} close={()=>{setClicked(false)}}/>
    </div>
  );
}

export default App;
