import React, {useState} from 'react';
import Greeting from './components/Greeting'
function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <input value = {username} onChange = {(event) => {setUsername(event.target.value);}} />
      <Greeting username = {username}/>
    </div>
  );
}

export default App;