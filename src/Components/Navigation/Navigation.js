import React from 'react';


const Navigation = ({isLogedIn, onRouteChange}) =>{
	//checks the isLogedIn variable
	//based on that variable, it changes the functionalities available in the Navigation menu
	if (isLogedIn)
		return(

			

			<div >

				<nav className='bb ma3' style={{display:'flex', justifyContent:'flex-end'}}>
					<p onClick={() =>onRouteChange('signout')}className='f3 b link dim black pa1 pointer bl bw1 grow'>Sign Out</p>

				</nav>

			</div>
		);
	else
		return(
				<div>

				<nav className='bb ma3' style={{display:'flex', justifyContent:'flex-end'}}>
					<p onClick={() =>onRouteChange('signIn')} className='f3 b link dim black pa3 pointer bl bw1 grow'>Sign in</p>
					<p onClick={() =>onRouteChange('register')} className='f3 b link dim black pa3 pointer bl bw1 grow'>Register</p>

				</nav>

			</div>
			);



}

export  default Navigation;