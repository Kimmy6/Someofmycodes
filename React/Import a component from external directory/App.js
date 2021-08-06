import React, {useState} from 'react';
import Myform from './components/Myform';

function App() {
  const [username, setUsername] = useState("");
  const onChange = (event) => {
    setUsername(event.target.value);
  }
  return (
    <div className="App">
      <h1>{username}님 환영합니다.</h1>
      <Myform onChange = {onChange} />
    </div>
  );
}

export default App;
