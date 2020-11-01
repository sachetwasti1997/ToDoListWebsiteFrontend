import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import Axios from "axios";
import ToDoList from "./ToDoList";

class ToDoForm extends Component{

    state = {
        formInput : '',
        priority : 0
    }

    sendData = async (task) => {
        const res = await Axios.post('/tasks', task);
        console.log(res);
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
        return(
            <Container>
                {this.displayForm()}
                <ToDoList/>
            </Container>
        )
    }

}

export default ToDoForm;
