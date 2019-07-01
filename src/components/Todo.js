import React, {Component} from 'react';

export default class Todo extends Component {
    render() {
        const {style} = this.props;
        return (
            <p style={style}>
                <input type='checkbox'
                       onChange={this.props.onDoneChange}
                       checked={this.props.todo.done}
                       readOnly={true}
                />
                <span>{this.props.todo.name}</span>
            </p>
        );
    }
}
