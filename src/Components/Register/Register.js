import React from 'react';




class Register extends React.Component{
  //state variables that include user data
  //also two state variables that check if the credidentials are empty or the email already exists
	 constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      emailExist:false,
      emptyCreds:false
    }
  }



  //functions that change the value of state variables when new input is given

    onNameChange = (event) => {
    this.setState({username: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  //sends posts request to the api on the register end-point
  //checks first if the state variables are empty 
  //also checks if the response indicates the email is already registered
  onSubmitSignUp = (event) => {
    event.preventDefault();
    if(this.state.email!==''&& this.state.username!==''&& this.state.password==''){
    
    fetch('http://localhost:3000/register', {

      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user==='unable to register') {
          this.setState({emailExist:true})

        }else if(user){
          this.props.getUser(user)
          console.log(user)
          this.setState({emailExist:false})
          this.props.onRouteChange('home');
        }
      })
    }else{
      this.setState({emptyCreds:true});
    }
  }

   
  //render the warning if necessary
render(){
  let warnLog;
  if(this.state.emailExist===true){
    warnLog= <label className="db fw6 lh-copy f6" style={{color:'red'}} >Email already used!</label>
  }else if(this.state.emptyCreds===true){
    warnLog= <label className="db fw6 lh-copy f6" style={{color:'red'}} >Please enter all fields!!</label>
  }else
    warnLog=<div></div>


	return(


	<article className="pa4 black-80">
  <form action="sign-up_submit" method="POST" acceptCharset="utf-8" >
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
       <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name"  id="name" 
        onChange={this.onNameChange}
        />
      </div>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email address</label>
        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"
        onChange={this.onEmailChange}
         />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password" 
        onChange={this.onPassChange}
        />
      </div>
    </fieldset>
    <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" 
    onClick={this.onSubmitSignUp}
    /></div>
    {warnLog}
  </form>
</article>

);
}

}

export  default Register;