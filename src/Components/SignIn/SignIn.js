import React from 'react';

import './SignIn.css'


class SignIn extends React.Component{

	//saves the email, password and failed login attempts as state variables
	 constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      failedLogin:false
    }
  }
  //changes the email var on input change
   onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  //changes the password variable on input change
   onPassChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }
  //submits the email/password as json format
  //based on the response, if the response says the credidentials are long, failedLogin is set to true
  //changes the route to 'home' and saves user data in the user state variable in app.js 
  onSubmit = (event) => {
  		event.preventDefault();
    	fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user==='wrong credidentials') {
        	this.setState({failedLogin:true})
        	console.log(this.state.failedLogin);
        }else{
        	this.setState({failedLogin:false})
        	this.props.getUser(user);
          	this.props.onRouteChange('home');
        }
      })
    
  }


render(){

	//creates a warnLog that is displayed only if the user enters wrong credidentials
	let warnLog;
	if(this.state.failedLogin===true){
		warnLog= <label className="db fw6 lh-copy f6" style={{color:'red'}} >Wrong credidentials!</label>
	}else{
		warnLog=<div></div>
	}

	return(
	<div>
	<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center ">	
	<main className="pa4 black-80">
	  <form className="measure center" method="POST">
	    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
	      <div className="mt3">
	        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
	        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"
	        onChange={this.onEmailChange}
	         />
	        
	      </div>
	      <div className="mv3">
	        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
	        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
	        onChange={this.onPassChange}
	        />
	       	{warnLog}
	      </div>
	     
	    </fieldset>
	    <div className="">
	      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" 
	      onClick={this.onSubmit}
	      />
	    </div>

	  </form>
	</main>
		
	</article>
		<br/><br/><br/><br/><br/>
	</div>
	);
}

}

export  default SignIn;