import React from 'react';




class Home extends React.Component{

	 constructor(props) {
    super(props);
    
  }

//changes the value of 'route' state variable in app.js
onStartQuiz=(event) =>{
	this.props.onRouteChange('quizCreate');
}
   

render(){
	//renders the home screen of the user, with his/her username and score
	return(
    <div className='ma2 mt0 flex ma2 '>
      <div className='center flex flex-column'>
        <p className="f1 pa1">Welcome, {this.props.user.username} !!</p>
      	<p className="f3 pa1">Your score is {this.props.user.score} !!</p>
      	<div className="ph3">
  			<a className="f3 link dim br3 ph3 pv2 mb2 dib white bg-black"

  			onClick={this.onStartQuiz} >New quiz</a>
  		</div>
      </div>
    </div>

);
}

}

export  default Home;