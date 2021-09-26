import React, { useEffect, useState } from 'react';
import Actors from '../Actors/Actors';
import Member from '../Member/Member';

const Home = () => {

    const [actors, setActors] = useState([])
    const [member, setMember] = useState([])

    useEffect(() => {
        fetch("./actor.json")
            .then(res => res.json())
            .then(data => setActors(data))
    }, [])

    const handleButton = (actor) => {
        const newMember = [...member, actor]
        setMember(newMember)
    }

    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-md-9">
                    <div className="row">
                        {
                            actors.map(actor => <Actors
                                key={actor.name}
                                actor={actor}
                                handleButton={handleButton}
                            ></Actors>)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    <Member member={member}></Member>
                </div>
            </div>
        </div>
    );
};

export default Home;