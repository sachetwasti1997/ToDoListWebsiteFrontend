import Axios from "axios";

export const getAllTasks = () => async(dispatch) => {
    await Axios
        .get('tasks')
        .then(res => {
            dispatch({type: 'GET_TASKS', payload: res.data})
        })
        .catch(err => {
            console.error(err)
        })
}

