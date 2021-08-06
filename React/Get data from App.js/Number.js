import React from 'react';

const Number = (props) => {
    const nums = props.data.map((number) =>
        <p key = {number.toString()}>{number}</p>

    );

    return (
    <div id = "root">
        <div class = "App">
            <div>
            {nums}
            </div>
        </div>
    </div>
        
    );
  
}

export default Number;