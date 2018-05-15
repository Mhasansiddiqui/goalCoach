import React, { Component } from 'react';

import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';
import { setCompleted } from '../actions'
class CompleteGoalList extends Component {

    componentDidMount() {
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const { email, title } = completeGoal.val();
                completeGoals.push({ email, title });
            })
            console.log(completeGoals)
            this.props.setCompleted(completeGoals)
        })

    }
    clearCompleted(){
        completeGoalRef.set([]);
    }

    render() {
        return (


            <div>
                {
                    this.props.completeGoals.map((completeGoal, index) => {
                        const { title, email } = completeGoal;
                        return (
                            <div key={index}>
                              <strong>{title}</strong> completed by <em>{email}</em>
                            </div>
                        )
                    })
                }
                <div onClick={()=>this.clearCompleted()} className="btn btn-primary">Clear All</div>
            </div>


        )
    }
}

function mapStateToProps(state) {

    console.log(state)
    const { completeGoals } = state;
    return {
        completeGoals
    }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
