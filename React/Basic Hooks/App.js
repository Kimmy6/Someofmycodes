import React from 'react';
import useToggle from './hooks/useToggle';

function App() {
    // 초기값은 useToggle의 매개변수로부터 입력받아 isOn state를 생성
    const {isOn, toggle} = useToggle(false);

    return(
        <div className = "App">
            <button onClick = {() => {toggle();}}>
                {/* 3항연산자 사용 */}
                {isOn === true ? "ON" : "OFF"}

            </button>
        </div>
    )

}

export default App;
