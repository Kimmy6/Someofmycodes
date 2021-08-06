import React, {useState} from 'react';

const useToggle = (initialValue) => {
    const [isOn, setIsOn] = useState(initialValue);
    const toggle = () => {
        setIsOn((now) =>{
            return !now;
          }
        )

    }
    return {isOn, toggle};
}

export default useToggle;



