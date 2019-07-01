import React, {Component} from 'react';

export default class NewTodoForm extends Component {
    // This is state of NewTodoForm
    state = {
        newTodoName: ''
    };

    onInputChange(newTodoName) {
        this.setState({
            newTodoName: newTodoName
        });
    }

    render() {
        const {onNewTodo} = this.props;
        return (
            <div>
                <input type="text" onChange={(event) => {
                    this.onInputChange(event.target.value)
                }} value={this.state.newTodoName}/> {/* Value of input box */}
                <button type="submit" onClick={() => {
                    onNewTodo({name: this.state.newTodoName, done: false})
                }}>Create
                </button>
            </div>
        );
    }
}
