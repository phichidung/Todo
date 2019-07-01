import React, {Component} from 'react';

export default class Stat extends Component {
    render() {
        const {done, total} = this.props;
        return (
            <strong>
                <span> ({done}) </span> / <span> ({total}) </span>
            </strong>
        );
    }
}
