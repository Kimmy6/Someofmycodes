import React, {useRef} from 'react';

function App() {
  const inputRef = useRef(null)
  
  return (<div classname = "App">
  <input ref = {inputRef}></input>
  <button onClick = {(event) =>alert(`${inputRef.current.value}`)} />
  {/* ref 오브젝트는 current라는 property를 가짐, 
  useRef에 의해 반환된 ref 객체가 변경되어도 컴포넌트는 재렌더링되지 않음 */}
  </div>
  )
}

export default App;
