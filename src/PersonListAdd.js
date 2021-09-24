import React from "react";

import API from './Api'

export default class PersonListAdd extends React.Component {
    state = {
        person: [],
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name: this.state.name
        }
        API.post(`/users`, { user } )
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }
    render() {
        return (
          <>
            <form onSubmit={this.handleSubmit}>
              <label>
                Person Name:
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <button type="submit">Add</button>
            </form>
          </>
        )
      }

}