import React from 'react';
import StartScreen from './StartScreen.js'
import Quiz from './Quiz.js'



class QuizCreate extends React.Component{
	//data variables used to store questions and the score the user has obtained from the quiz
	 constructor(props) {
    super(props);
    this.state={
    	startQuiz:false,
    	generatedScore:0,
    	questions:this.props.questions
    }
    
  }

BinaryQuiz = (event)=>{
	console.log('yes')
	fetch('http://localhost:3000/binaryquiz').then(response => response.json()).then(response=>{
		this.props.getQuestion(response);
		this.setState({questions:this.props.questions})
		
});
	
	this.setState({startQuiz:true})
}

cQuiz = (event)=>{
	console.log('yes')
	fetch('http://localhost:3000/cquiz').then(response => response.json()).then(response=>{this.props.getQuestion(response)
		
		this.setState({questions:this.props.questions})
});
	
	this.setState({startQuiz:true})
}


   

render(){
	let goOn;

	if (this.state.questions.length){
			goOn=<Quiz questions={this.state.questions} onRouteChange={this.props.onRouteChange} />
	}else{
		goOn=<StartScreen BinaryQuiz={this.BinaryQuiz} CQuiz={this.cQuiz}/>;
	}

	return(
		<div>
    	{goOn}
    	</div>
);
}

}

export  default QuizCreate;