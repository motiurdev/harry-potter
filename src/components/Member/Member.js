import React from 'react';

const Member = (props) => {
    const { member } = props || {};

    let total = 0;
    for (const members of member) {
        total = total + members.salary;
    }


    return (
        <div className="bg-light rounded p-2">
            <h4><i className="fas fa-users"></i> Total Added: {props.member.length}</h4>
            <h5 className="ms-4">Total Cost: ${total}</h5>
            <ul style={{ listStyle: "none" }}>
                {
                    member.map(element => <li><i class="fas fa-user"></i> {element.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Member;