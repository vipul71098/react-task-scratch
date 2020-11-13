import React from 'react';
import {connect} from 'react-redux';
 
function Input(props){
  
 
  return(
  	<div>
  	<input value={props.inputValue} onChange = {props.inputChanged} />
  	
  	</div>
  	);
}

const mapStateToProps = (state) => {
	return {
		inputValue : state.inputValue
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		inputChanged: (evt) => {
			const action = {type:'INPUT_CHANGE',text:evt.target.value};
			dispatch(action)
		}
	}
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Input);