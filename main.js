  const countValue= document.querySelector('#counter');    

//   const countValue=document.getElementById('counter')

  //countValue is an element and value is in that element.

  //const value doesn't change but let changes thats why 
  //let is used in the below scope;

  const increment=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //upadete the value from UI
    value=value+1;
    //set the value from UI
    countValue.innerText=value;
  };

  const decrement =()=>{
    //get the value from the UI
    let value=parseInt(countValue.innerText);
    //update the value from Ui
    value=value-1;
    //set the value on UI
    countValue.innerText=value;
  };

// function increment(){
//     //get the value from UI
//     let value=parseInt(countValue.innerText);
//     //upadete the value from UI
//     value=value+1;
//     //set the value from UI
//     countValue.innerText=value;
//   };


countValue.addEventListener('click',function increment(){
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //update the value from UI
    value=value+1;
    //set the value from UI
    countValue.innerText=value;
  });

  countValue.addEventListener('click',function decrement(){
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //update the value from UI
    value=value-1;
    //set the value from UI
    countValue.innerText=value;
  });