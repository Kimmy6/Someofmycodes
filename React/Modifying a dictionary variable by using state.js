import React, { useState } from 'react';

function App() {
  const [person, setPerson] = useState({
    name: "김민수",
    school: "엘리스대학교"
  })

  const handleInput = (event) => {
    const {name, value} = event.target;
    setPerson((now) => {
      const newPerson = {...now};
      newPerson[name] = value;
      return newPerson;
    })

  }
  return (
    <div className="App">
      <input name = "name" value = {person.name} onChange = {handleInput} />
      <input name = "school" value = {person.school} onChange = {handleInput} />
      <button onClick = {() => alert(`${person.name}님은 ${person.school}에 재학중입니다.`)}>클릭</button>
    </div>
  );
}

export default App;