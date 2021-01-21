import React, {Component} from "react";

class CreateExercise extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: []
        };

        this.userInputRef = React.createRef();
    }

    componentDidMount() {
        this.setState({
            username: "test-user",
            users: ["test-user"]
        });
    }

    onChangeUsername = (e) => {
        this.setState(
            {
                username: e.target.value
            }
        );
    }

    onChangeDescription = (e) => {
        this.setState(
            {
                description: e.target.value
            }
        );
    }

    onChangeDuration = (e) => {
        this.setState(
            {
                duration: Number(e.target.value)
            }
        );
    }

    onChangeDate = (e) => {
        this.setState(
            {
                date: e.target.value
            }
        );
    }

    onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise);
        window.location = "/";
    }

    render() {
        return (
            <div>
                <h1>Create new exercise log</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <select ref={this.userInputRef}
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map(function(username) {
                                        return (
                                            <option key={username} value={username}>{username}</option>
                                        );
                                    })
                                }
                            </select>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" 
                            value={this.state.description}
                            onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Duration:</label>
                        <input type="number" 
                            value={this.state.duration}
                            onChange={this.onChangeDuration}/>
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <input type="date" 
                            value={this.state.date}
                            onChange={this.onChangeDate}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create exercise" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateExercise;