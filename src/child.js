import React, {Component} from 'react';
import Service from './servicecall';

class Child extends Component {
    constructor(props) {
        super(props);
    }
    focus() {
        this.refs.inputval.focus();
    }

    render() {
        return(
            <div>
                {this.props.title}
                <div>
                    <input ref="inputval"  onClick={this.focus.bind(this)} type="text"/>
                </div>
                
            </div>
        );
    }
}

export default Child;