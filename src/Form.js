import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",element : ""
        };
    }
    handleChange = (event) => {
        this.setState({
            input: event.target.value,
            element:event.target
        });
    };

    render() {
        return (
            <div className="form-group">
                <input type="text" className="form-control" onChange={this.handleChange} />
                <button className="btn btn-primary btn-block" onClick={this.props.addTodo.bind(this,this.state.input,this.state.element)}>
                    Add todo
                </button>
            </div>
        );
    };
};

export default Form;