import React from "react";
import {Container, ListGroup} from "react-bootstrap";
import {connect} from "react-redux";
import {getAllTasks} from "../actions/getTask";

class ToDoList extends React.Component{

    componentDidMount() {
        this.props.getAllTasks();
    }

    displayTaskData = (listOfTasks = []) => {
        const listData = listOfTasks.map(value => {
            return(
                <ListGroup.Item key={value.id}>{value.task_name}</ListGroup.Item>
            )
        })
        return listData;
    }

    render() {
        console.log(this.props.tasksData.tasksData)
        return(
            <div>
                {this.props.tasksData ? <ListGroup>{this.displayTaskData(this.props.tasksData.tasksData)}</ListGroup>: null}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {tasksData : state};
}

export default connect(mapStateToProps, {
        getAllTasks
    })(ToDoList);
