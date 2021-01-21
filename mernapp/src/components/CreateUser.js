import React, {Component} from "react";

class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: ""
        };
    }

    onChangeUsername = (e) => {
        this.setState(
            {
                username: e.target.value
            }
        );
    }

    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.username
        }
        console.log(user);
        fetch('http://localhost:5000/users/add', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(user)
        }).then((data) => {
            console.log(data);
        }).catch((err) => {{
            console.error(err);
        }})

        this.setState({ username: ""});
    }

    render() {
        return (
            <div>
                <h1>Create new user</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" 
                            value={this.state.username}
                            onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create user" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateUser;