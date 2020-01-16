const express = require('express');
const bcrypt = require('bcrypt-nodejs')
const cors= require('cors');
const knex= require('knex');
const app=express();




//api build with node.js and express


//setting the database connection using knex.js
const db=knex({
	client:'pg',
	connection:{
		host:'127.0.0.1',
		user:'masterv',
		password:'mariaioana',
		database:'techtrivia'
	}});




//using adapter DP to intercept the request and parse it to a json format
app.use(express.json());
app.use(cors())


///api for getting user
app.post('/signin',(req,resp)=>{
	//checking the signin data from the database
	//using bcrypt to compare the hash from our database to the user input password
	db.select('email','passhash').from('users')
	.where('email','=',req.body.email)
	.then(data=>{
		if(data.length){
		console.log(req.body.password)
		console.log(data[0].passhash)
		const  isValid = bcrypt.compareSync(req.body.password,data[0].passhash)
		console.log(isValid)
		if (isValid){
			db.select('id','username','email','score').from('users').where('email','=',req.body.email)
			.then(user=>{
				console.log(user)
				resp.json(user[0])
			})
			.catch(err =>{
			console.log(err)
			 resp.status(400).json('unable to get user')})
		}else{
			resp.status(400).json('wrong credidentials')
		}

		}else{
			resp.status(400).json('wrong credidentials')
		}
	})

	const  {email, name, password}=req.body;



	


	
})
//the end poin for registering a new user
//uses the bcrypt library to store the password securely, via hashing
app.post('/register',(req,resp)=>{
	const {email,username,password }=req.body
	let cryptPass=bcrypt.hashSync(password)
	db('users')
	.returning('*')
	.insert({
		email:email,
		username:username,
		passhash:cryptPass,
		score:0
	}).then(response=>{
		console.log(response)
		resp.json(response[0])
	}).catch(err=>resp.status(400).json('unable to register'))

	
	
})
//the end-point for sending binary computation questions
app.get('/binaryquiz',(req,resp)=>{
	db.select('question','opt1','opt2','opt3','opt4','answer').from('questions')
	.where('category','=','binary').then(questions=>{
		resp.json(questions)
	})

	
	
})

///the end-point for sending C language questions
app.get('/cquiz',(req,resp)=>{
	db.select('question','opt1','opt2','opt3','opt4','answer').from('questions')
	.where('category','=','c').then(questions=>{
		resp.json(questions)
	})

	
	
})



///the server starts listening for requests on port 3000

app.listen(3000, ()=>{
	console.log('app is running on 3000')
});





