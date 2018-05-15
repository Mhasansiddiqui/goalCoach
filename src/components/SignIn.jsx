import React, {Component} from 'react';

import {firebaseApp} from '../firebase'; 

import {Link} from 'react-router';

class SignIn extends Component{

    constructor(props){
       super(props);
       this.state = {
           email : '',
           password : '',
           error: {
               message: ''
           }
       }
    }

    SignIn(){
        console.log(this.state);

        const {email , password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
         .then(res =>{
             console.log(res);
         })
         .catch(error => {
             this.setState({error})
         })
    }

    render(){
      return   (
            <div className="form-inline">
            <h2>  SignIn </h2>
               <div className="form-group">
                 <input onChange={event => this.setState( { email : event.target.value } ) }  type="text" className="form-control"  placeholder="email"/>
                 <input onChange={event => this.setState( { password : event.target.value } ) }  type="password" className="form-control"  placeholder="password"/>

                 <button onClick={()=> this.SignIn()} className="btn btn-primary">SingIn   </button>
               </div>

               <div>{this.state.error.message}</div>

               <div><Link to={'/signup'}>Sign Up instead</Link></div>
            </div>
        )
    }
}

export default SignIn;