import React from 'react';
import Card from 'react-bootstrap/Card';


class Quiz extends React.Component{
	constructor(props) {
    super(props);
    this.state={
    	questions:this.props.questions,
    	endQuiz:false,
    	score:0,
    	index:0
    }
}

    onAnswerOne=(event)=>{
        if(this.state.questions[this.state.index].answer===1){
            this.setState({score:this.state.score+1})

        }
        if(this.state.index<this.state.index.length){
            this.setState({index:this.state.index+1})
        }else{
            console.log(this.state.score);
            this.props.onRouteChange('home');
        }
    }


    onAnswerTwo=(event)=>{
        if(this.state.questions[this.state.index].answer===2){
            this.setState({score:this.state.score+1})

        }
        if(this.state.index-1<this.state.index.length){
            this.setState({index:this.state.index+1})
        }else{
            console.log(this.state.score);
            this.props.onRouteChange('home');
        }
    }


    onAnswerThree=(event)=>{
        if(this.state.questions[this.state.index].answer===3){
            this.setState({score:this.state.score+1})

        }
        if(this.state.index-1<this.state.index.length){
            this.setState({index:this.state.index+1})
        }else{
            console.log(this.state.score);
            this.props.onRouteChange('home');
        }
    }


    onAnswerFour=(event)=>{
        if(this.state.questions[this.state.index].answer===4){
            this.setState({score:this.state.score+1})

        }
        if(this.state.index-1<this.state.index.length){
            this.setState({index:this.state.index+1})
        }else{
            console.log(this.state.score);
            this.props.onRouteChange('home');
        }
    }
	
	render(){

    return(
		<div >

          
            
             <div className='ma2 mt0 flex ma2 '>
                 <div className='center flex flex-column'>
        <p className="f1 pa1">Question #{this.state.index+1}</p>
        <p className="f2 pa1">{this.state.questions[this.state.index].question}</p>
        <div className="ph3">
            <a className="f3 link dim br3 ph3 pv2 ma2 dib white bg-black"

            onClick={this.onAnswerOne} >{this.state.questions[this.state.index].opt1}</a>
            <a className="f3 link dim br3 ph3 pv2 ma2 dib white bg-black"

            onClick={this.onAnswerTwo} >{this.state.questions[this.state.index].opt2}</a>
            <a className="f3 link dim br3 ph3 pv2 ma2 dib white bg-black"

            onClick={this.onAnswerThree} >{this.state.questions[this.state.index].opt3}</a>
            <a className="f3 link dim br3 ph3 pv2 ma2 dib white bg-black"

            onClick={this.onAnswerFour} >{this.state.questions[this.state.index].opt4}</a>
        </div>
      </div>
    </div>
        </div>

			);


		}

}




export default Quiz;
