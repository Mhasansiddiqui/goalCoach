import React, { Component } from 'react';


import {connect} from 'react-redux'; 
import {firebaseApp} from '../firebase';

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList'


class App extends Component {

    signOut(){
       firebaseApp.auth().signOut();
    }
    render() {
        return (
            <div>
                <h3>Goals Coach</h3>

                <AddGoal /> 
                <hr/>
 
                <h4>Goals</h4>
                <GoalList />
                <hr/>
                
                <h4>Complete Goals</h4>
                
               < CompleteGoalList />    
               <hr/>

                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                Sign OUt        
                </button>
            </div>
        )
    }
}

function mapStateProps (state){
   // console.log(state)
    return {};
}


export default connect(mapStateProps,null)(App);