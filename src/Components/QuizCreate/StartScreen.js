import React from 'react';



class StartScreen extends React.Component{

	 constructor(props) {
    super(props);
    
  }


   

render(){

	return(
     <div className='ma2 mt0 flex ma2 '>
      <div className='center flex flex-column'>
      	<div className="ph3">
  			<a className="f3 link dim br3 ph3 pv2 mb2 ma2 dib white bg-black"
  			onClick={()=>this.props.BinaryQuiz()} >Binary</a>
  			<a className="f3 link dim br3 ph3 pv2 mb2 ma2 dib white bg-black "
  			onClick={()=>this.props.CQuiz()} >C</a>
  		</div>
      </div>
    </div>


);
}

}

export  default StartScreen;