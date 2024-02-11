import React from 'react'

function Arraysandobjects() {

    let arr = [1,2,5,6,7,8];
    let obj ={
        name :"Alexa",
        age:10
    }
  return (
    <>
        <h1> Arrays and objects in javacscript</h1>
        {arr.map((ankur)=> <h2>{ankur}</h2>)}
       

        <h2> {obj.name} </h2>
    </>
  )
}

export default Arraysandobjects