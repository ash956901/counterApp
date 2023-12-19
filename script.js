//Get the value 
const countValue=document.querySelector('.counter');

//Increment function
const increment= ()=>{
  //get the value from ui and convert to int 
  let value=parseInt(countValue.innerHTML);
  //updation
  value = value+1;
  //set or assign
  countValue.innerText=value;
};

//Decrement function

const decrement=()=>{
  //get the value from ui and convert to int 
  let value=parseInt(countValue.innerText);
  //updation
  value = value-1;
  //set or assign
  countValue.innerText=value;
};
