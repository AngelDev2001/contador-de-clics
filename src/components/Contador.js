import React from 'react';
import '../style/Contador.css';

export const Contador = ({numClics}) => {
    return (
        <div className='contador'>
            {numClics}
        </div>
    );
}