import React from "react";
// import axios from "axios";
import API from './Api'

export default class PersonListDel extends React.Component {
    state = {
        id: '',
    }

    handleChange = (event) => {
        this.setState({ id: event.target.value })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const response = await API.delete(`/users/${this.state.id}`);
        console.log(response);
        console.log(response.data);
    }
    render() {
        return (
          <>
            <form onSubmit={this.handleSubmit}>
              <label>
                Person ID:
                <input type="text" name="id" onChange={this.handleChange} />
              </label>
              <button type="submit">DELETE</button>
            </form>
          </>
        )
      }

}