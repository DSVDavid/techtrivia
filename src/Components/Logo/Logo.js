import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import tech_image from './tech_image_3.png';


const Logo = () =>{
	//The logo of the app,created using the react-tilt library
	return(
		<div className='ma4 mt0 flex ma3 '>
			<div className='center flex'>
			<Tilt className="Tilt shadow-2 " options={{ max : 30 }} style={{ height: 125, width: 125 }} >
 				<div className="Tilt-inner"> 
 					<img alt="Logo" src={tech_image} /> 
 				</div>
 			</Tilt>
 			<h1 className='pa3 f1'> [ TechTrivia ] </h1>
			</div>
		</div>
	);


}

export  default Logo;