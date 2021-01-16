import React from "react";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import {fetchData} from "./api/index";

// https://youtu.be/khJlrj3Y6Ls?list=PLd6Igc0Cu9vUwgcEdFOfQN1m4nq6pU3iX&t=3291

class App extends React.Component {

    state = {
      data: {}
    };

    componentDidMount() {
      fetchData().then((data) => {
        console.log("Obtenido el resultado", data);
        this.setState({data: data});
      });
    }

    render() {
      return (
        <div className={styles.container}>
          <Cards data={this.state.data}/>
          <CountryPicker/>
          <Chart/>
        </div>
      );
    }
}

export default App;
