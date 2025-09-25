import React from 'react'

const Button = ({ title, color, padding, test }) => {
    console.log(title, color, padding);

    return (
        <>
            <button className={`${color} ${padding} `} onClick={test}>
                {title}
            </button>
        </>
    )
}

export default Button