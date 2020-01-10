import React from 'react';

const TodoList = props => {
    return (
        <ul className="list-group list-group-flush">
            {
                props.items.map(i => {
                    return  <li key={i.id} className="list-group-item" >{i.title}</li>
                })
            }
        </ul>
    );
};

export default TodoList;