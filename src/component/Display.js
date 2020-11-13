import React from 'react';
 import { useSelector } from "react-redux";
function Display(props)  {
  const data = useSelector(state => state.inputValue);


  return(
  	<h1> {data}</h1>
  	);
}
 
export default Display;