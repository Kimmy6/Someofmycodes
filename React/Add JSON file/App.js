import React, {useState} from 'react';
import InsertForm from "./components/InsertForm";
import ListView from './components/ListView';

function App() {
  const [todoList, setTodoList] = useState([]);
  const handleInsert = (value) => {
    setTodoList((now) => {
        const newList = [...now];
        // todoList를 수정하는 것이 아니라 내용을 추가하므로 .push를 사용함
        newList.push({
            key: new Date().getTime(), // JSX에서 Array의 값을 표현할 때 각 요소를 구분하기 위한 값
            value: value, // onInsert로부터 전달받은 값,
            isCompleted: false // 완료 처리를 위한 flag
          });
    return newList;
  });
}
  return (
    <div className="App">
        <ListView todoList = {todoList} />
        <InsertForm onInsert = {handleInsert} />
    </div>
  );
}

export default App;
