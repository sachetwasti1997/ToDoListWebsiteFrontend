import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {getAllTasks} from '../actions/getTask'
import {connect} from "react-redux";

class ToDoForm extends Component{

    state = {
        formInput : '',
        priority : 0
    }

    componentDidMount() {
        this.props.getAllTasks();
    }

    sendData = (task) => {

    }

    displayForm = () => {
        return(
            <Form onSubmit={e => e.preventDefault()}>
                <Form.Group>
                    <Form.Control
                        type={"text"}
                        placeholder={"Enter a task"}
                        onChange={e => {
                            this.setState({
                                formInput : e.target.value
                            })
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type={"number"}
                        placeholder={"Priority"}
                        onChange={e => {
                            this.setState({
                                priority : e.target.value
                            })
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <Button type={"button"} onClick={() => this.sendData(
                        {
                            "task_name" : this.state.formInput,
                            "task_priority" : this.state.priority
                        }
                    )}>
                        Save Task
                    </Button>
                </Form.Group>
            </Form>
        );
    }

    render() {
        console.log(this.props)
        return(
            <Container>
                {this.displayForm()}
            </Container>
        )
    }

}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps , {
    getAllTasks
})(ToDoForm);
