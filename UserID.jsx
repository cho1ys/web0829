import React from 'react';

const UserID = (p) => {
    function updateId(e){
        p.onId(e.target.value)
    }
    return (
        <div>
            <h3>ID : <input type='text' onChange={updateId}></input></h3>
        </div>
    );
};

export default UserID;