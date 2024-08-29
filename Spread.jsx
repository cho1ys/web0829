import React, { useState } from 'react';

const Spread = () => {
    const [value, setValue] = useState(['안녕', '하이'])
    function sethello(){
        const newValue = [...value]
        newValue[1] = 'Hello'
        setValue(newValue)
    }
    return (
        <div>
            <h1>{value[0]}</h1>
            <h1>{value[1]}</h1>
            <button onClick={sethello}>배열 값 변경</button>
        </div>
    );
};

export default Spread;