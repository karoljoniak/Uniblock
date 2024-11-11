import React from 'react';

interface ButtonProps {
    label: string;
}

export const Button = ({ label }: ButtonProps) => {
    return (
        <button className='mb-button__container'>{ label }</button> 
    )
}