import {combineReducers} from 'redux'

import goals  from './reducer_goals'
import users  from './reducer_user'
import completeGoals from './reducer_competedGoals'


export default combineReducers({
    users,
    goals,
    completeGoals
})