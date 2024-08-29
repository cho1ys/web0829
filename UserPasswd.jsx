import React from 'react';

const UserPasswd = (p) => {
    function updatePw(e){
        p.onPw(e.target.value)
    }
    return (
        <div>
            <h3>PW : <input type='text' onChange={updatePw}></input></h3>
        </div>
    );
};

export default UserPasswd;