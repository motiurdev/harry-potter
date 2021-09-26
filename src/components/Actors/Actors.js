import React from 'react';
import './Actors.css'

const Actors = (props) => {
    const { name, gender, image, dateOfBirth, salary, house } = props.actor || {};
    return (
        <div className="col-md-4 my-3">
            <div className="card h-100">
                <img src={image} className="card-img-top actor-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-text text-muted">Gender: {gender}</h6>
                    <h6 className="card-text text-muted">House: {house}</h6>
                    <h6 className="card-text text-muted">Date Of Birth: {dateOfBirth}</h6>
                    <h6 className="card-text text-muted">Salary: ${salary}</h6>
                    {/* add actor button */}
                    <button style={{ backgroundColor: "rgb(0 66 52)" }} className="btn text-white mt-4 d-block mx-auto " onClick={() => props.handleButton(props.actor)}><i className="fas fa-user"></i> Add Actor</button>
                </div>
            </div>
        </div>
    );
};

export default Actors;