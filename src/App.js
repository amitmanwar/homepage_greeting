import React from 'react'
import './App.css'

const App = () => {

  const cssStyle={};

  let curDate=new Date(2020,5,5,8);
curDate=curDate.getHours();
let greeting="";

if(curDate>=1 && curDate <12){
 greeting='Good Morning';
 cssStyle.color='green'
}else if(curDate>=12 && curDate <19){
  greeting="Good Afternoon";
  cssStyle.color='orange'
}else{
  greeting="Good Night"
  cssStyle.color='black'
}

 return (
    <>
    <div className='parent'>
      <h1 id='posi'>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>

    </div>

    </>
  )
}

export default App