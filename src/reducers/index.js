import {combineReducers} from "redux";
import { storeTaskData } from './getTasks'


export default combineReducers({
    tasksData: storeTaskData
})
