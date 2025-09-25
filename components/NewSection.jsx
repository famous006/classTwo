import React, { useState } from 'react'



const NewSection = () => {
    const [myAge, setmyAge] = useState(100)
    const [myName, setmyName] = useState('Ayoola Oluwaseyi M.')
    
    // let myName = 'Ayoola Oluwaseyi M.'
    let myProfession = 'Software Developer'
    // let myAge = '100'
    
    const clickMe = (num) => {
        let display = `${num} is the correct odd for the game to pick`
        console.log(display);
        document.getElementById('show').innerHTML = display
    }
    
    const increaseAge = () =>{
        // myAge++;
        // console.log();
        
        // document.getElementById('show2').innerHTML = `I'm ${myAge} years old`
        setmyAge(myAge + 1)
        console.log(myAge);
        
    }
    
    
    return (
        <>
        <div className='card bg-body-secondary w-50 mx-auto text-center my-2 py-2 shadow-lg'>
            <h1>My name is {myName}</h1>
            <h2>I'm a {myProfession}</h2>
            <h3>I'm {myAge} years old</h3>
            <button className='btn btn-outline-secondary w-25 mx-auto' onClick={() => clickMe(12)}>Check</button>
            <button className='btn btn-outline-secondary w-25 mx-auto' onClick={increaseAge}>My Day</button>
            <div id='show' className='fw-bolder text-capitalize'></div>
            <div id='show2' className='fw-bolder text-capitalize'></div>
        </div></>
    )
}

export default NewSection