import React from 'react';

const StateLifting = (p) => {
    
    function updatevalue(e){
        p.d(e.target.value)
    }
    return (
        <div>
            <h3>입력 : <input type='text' onChange={updatevalue}/></h3>
        </div>
    );
};

export default StateLifting;