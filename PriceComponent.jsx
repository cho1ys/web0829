import React from 'react';

const PriceComponent = (p) => {
    const {price} = p
    return (
        <div>
            가격 : {price}원
        </div>
    );
};

export default PriceComponent;