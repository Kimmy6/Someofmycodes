// onChange 내에 직접 할당
import React from 'react';

function App() {
  return (
    <div className="App">
    <input onChange = {(event) => console.log(event.target.value)}></input>
    </div>
  );
}

export default App;

// 함수를 선언해서 할당
// import React from 'react';

// function App() {
//   const handleChange = (event) => {
//     console.log(event.target.value);
//   }
//   return (
//     <div className="App">
//       <input onChange = {handleChange}></input>
//     </div>
//   );
// }

// export default App;