import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import 'tachyons';
import Logo from './Components/Logo/Logo.js'
import Particles from 'react-particles-js';
import SignIn from './Components/SignIn/SignIn.js'
import Register from './Components/Register/Register.js'
import Home from './Components/Home/Home.js'
import QuizCreate from './Components/QuizCreate/QuizCreate.js'




//configuration file for particles effect
const particlesConfig={
  particles:{
    number:{
      value:120,
      density:{
        enable:true,
        value_are:300
      }

      }
  }
  
}






///Main application class

class App extends React.Component {
 

 //constructor for main app class
constructor(){
  super();
  this.state={
    route:'signIn',
    logedIn:false,
    questions:[],
    endQuiz:false,

     user: {
        id: '',
        username: '',
        email: '',
        score: 0
      }


  }

}



//function used to get user data
getUser = (data) => {
    this.setState({user: {
      id: data.id,
      username: data.username,
      email: data.email,
      score: data.score,
    }})
  }

setQuestions=(quests)=>{
  this.setState({questions:quests})
}


///function that changes the current route state
//it also changes the state variables asociated with that route
onRouteChange = (newRoute)=>{
  console.log(newRoute)
  if(newRoute==='signout'){
    this.setState({logedIn: false})
    this.setState({route: 'signIn'});
    this.setState({user: {
        id: '',
        name: '',
        email: '',
        score: 0
      }})
  }
  else if (newRoute === 'home') {
    this.setState({logedIn: true})
    this.setState({route: 'home'})
  }else {
    this.setState({route: newRoute});
  }
}

render(){
  //choosing the current View based on current route state
  let dispElem=<SignIn getUser={this.getUser} onRouteChange={this.onRouteChange}/>;
    switch(this.state.route){
      case 'signIn':
        dispElem=<SignIn getUser={this.getUser} onRouteChange={this.onRouteChange}/>
        break;
      case 'register':
        dispElem=<Register getUser={this.getUser} onRouteChange={this.onRouteChange}/>
        break;
      case 'home':
        dispElem=<Home user={this.state.user} onRouteChange={this.onRouteChange}/>
        break;
      case 'quizCreate':
        dispElem=<QuizCreate  onRouteChange={this.onRouteChange} questions={this.state.questions} getQuestion={this.setQuestions}/>
        break;
      default:
        dispElem=<SignIn getUser={this.getUser} onRouteChange={this.onRouteChange}/>
    }

    ///function that displays the app
    //includes static elements(Particles, Navigatio,Logo) and also the dispElem var that changes depending on the current view
  return (
    
    <div className="App">
      <Particles className="particles" params={particlesConfig} /> 
     
      <Navigation isLogedIn={this.state.logedIn} onRouteChange={this.onRouteChange} />
      
      <Logo />

      {dispElem}
      

    </div>
  );
}

}

export default App;
