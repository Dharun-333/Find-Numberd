import React from 'react'

function Result ({secretNum, terms}) {
    
let result;

if(!terms){ 
    result = '';
}else if (terms < secretNum) {
        result = 'Lower';
    }
    else if(terms > secretNum ) {
        result = 'Higher';
    }
    else if(terms == secretNum) {
        result = 'yipee! correct';
    }
    else  {
        result = 'Invalid';
    }
return(
    <h3>You Gussed: {result} </h3>
)
}
export default Result;