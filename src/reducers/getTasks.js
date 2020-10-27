export const storeTaskData = (data = [], actions) => {
    switch (actions.type) {
        case "GET_TASKS" :
            return actions.payload
        default:
            return data
    }
}