import React from 'react';

const Member = (props) => {
    const { member } = props || {};

    let total = 0;
    for (const members of member) {
        total = total + members.salary;
    }


    return (
        <div className="bg-light rounded p-2 mt-3 ms-2">
            <h4 style={{ color: "rgb(116, 0, 1)" }} className="header-title"><i className="fas fa-users" style={{ color: "rgb(116, 0, 1)" }}></i> Total Added: {props.member.length}</h4>
            <h5 className="ms-4 header-title" style={{ color: "rgb(116, 0, 1)" }}>Total Cost: ${total}</h5>
            <ul style={{ listStyle: "none" }}>
                {
                    member.map(element => <li key={element.id} style={{ padding: "5px 0px" }}><i className="fas fa-user" style={{ color: "rgb(116, 0, 1)" }}></i> {element.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Member;