import React from 'react';

const ChangeProps = (p) => {
    let name = p.name
    function changeName(){
        name = "최윤성"
        console.log(name)
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>클릭</button>
        </div>
    );
};

export default ChangeProps;