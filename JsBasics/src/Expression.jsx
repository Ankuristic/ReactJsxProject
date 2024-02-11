import React from 'react'

const Expresssion = () => {
var name ="Alexa";
// var age = 10;
let demo = null;
let undef ;
const bool = true;

// const name = "Demo";
const age = 18;
const hobby = "JavaScript";
const isMarried = false;


function sum (){
  let a = 10*5;
  return a ;
  // a funnction without return  should be nothing to jsx
}

const header = <h2> Jsx Expression </h2> // jsx expression 

  return (
   <>
   <h1> Hello {name} </h1>
   <p> your age is {age} </p>
   <h1>  i like {hobby} a lot! </h1>
   <h1> Am i married ?: {isMarried ? "true":"false" }</h1>
   <p> calling a function :{sum()} </p>

   </>
  )
}

export default Expresssion



// To display a boolean value you can use the  .toString() method on the variable to convert it into a string.