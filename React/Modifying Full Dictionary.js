import React, { useState } from 'react';

function App() {
  const [info, setInfo] = useState(
    { 
      name: "", 
      age: 20, 
      school: "" 
  }
  
  );

  const handleChanger = (event) => {
    const {name, value} = event.target;
    setInfo((now) => {
      const newInfo = {...now};
      newInfo[name] = value;
      return newInfo;
    })
  }
  return (
    <div className="App">
    <input name = "name" value = {info.name} onChange = {handleChanger}/>
    <input name = "age" value = {info.age} onChange = {handleChanger}/>
    <input name = "school" value = {info.school} onChange = {handleChanger}/>
    <p>{info.name}님은 {info.school}에 재학 중이며 현재 {info.age}세입니다.</p>
    </div>
  );
}

export default App;
