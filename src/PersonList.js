import React from "react";

import API from "./Api";

export default class PersonList extends React.Component {
    state = {
        persons: [],
        status: 0,
    }

    componentDidMount() {
        API.get(`/users`)
        .then(res => {
            const persons = res.data;
            const status = res.status;
            this.setState({ persons, status })
        })
    }
    render() {
        return (
            <>
                <ul>
                    { console.log(this.state.status) } 
                    { this.state.persons.map(elem => <li key={elem.id}>{elem.name} | {elem.phone} | {elem.email}</li>) }              
                </ul>
                <hr />
            </>
        )
    }
} 