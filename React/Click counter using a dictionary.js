// 딕셔너리 사용 시 원래의 state를 복제하고 변경하여야 컴포넌트가 정상적으로 렌더링됨
import React from 'react';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState(
    {
        name: "김민수",
        count: 0
    }
  );
  
  return (
    <div className="App">
      <button onClick = {() => {
        setPerson((current) => {
        const newPerson = { ...current };
        newPerson.count = newPerson.count + 1;
        return newPerson;
        })
      }} />
    <span>{person.name}님이 버튼을 {person.count}회 클릭하였습니다.</span>
    </div>
  );
}
export default App;