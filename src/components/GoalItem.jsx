import React, { Component } from 'react';
import {completeGoalRef, goalRef}from '../firebase'
import {connect} from 'react-redux'
class GoalItem extends Component {


     completeGoal(){
          const {email} = this.props.users;
         
          const {title , serverKey } = this.props.goal;

          goalRef.child(serverKey).remove();
          completeGoalRef.push({email,title})
     }

    render() {

        const { email, title } = this.props.goal;

        return (
            <div style={{ margin: '4px' }}>
                <strong>{title}</strong>
                <span style={{marginRight:'4px'}}> submited by</span>  <em>{email}</em>

                <button 
                  className="btn btn-sm btn-primary"
                  onClick={()=> this.completeGoal()}
                 >
                   complete
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
   
  const {users} = state;
  return {
      users
  }
}

export default connect(mapStateToProps,null)( GoalItem );