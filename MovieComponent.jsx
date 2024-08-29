import React from 'react';

const MovieComponent = (props) => {
    const {name,date,img} = props
    
    return (
        <div>
            <h1>제목 : {name}</h1>
            <h1>개봉 : {date}</h1>
            <img src={img}/>
            <hr/>
        </div>
    );
};

export default MovieComponent;