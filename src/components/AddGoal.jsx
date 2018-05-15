import React, {Component} from 'react';
import {goalRef} from '../firebase'
import {connect} from 'react-redux';
class AddGoal   extends Component {

    constructor(props){
        super(props);
         this.state  = {
            title : ''
         }
        
    }

    addGoal(){
        console.log('this.state',this.state)

        const  {title} = this.state; 

        const {email}   = this.props.users; 
        goalRef.push({email, title  })
    }
   render(){
       return (
           <div className="form-inline">
             <div className="form-group">
              <input onChange={event => this.setState({title : event.target.value})} type="text" placeholder="Add a goal" className="form-control"  style={{marginRight : '4px'}}/>
              <button className="btn btn-success" type="button" onClick={()=> this.addGoal()}>Sumibt</button>
             </div>
           </div>
            
       )
   }
}

function mapStateProps(state){
          const {users } =  state;
          return {users}
          
}


export default connect(mapStateProps,null) (AddGoal)