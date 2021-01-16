import React from "react";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import {fetchData} from "./api/index";

// https://youtu.be/khJlrj3Y6Ls?list=PLd6Igc0Cu9vUwgcEdFOfQN1m4nq6pU3iX&t=3291

class App extends React.Component {

    state = {
      data: {},
      country: ""
    };

    componentDidMount() {
      fetchData().then((data) => {
        console.log("Obtenido el resultado refinado", data);
        this.setState({data: data, country: this.state.country}, () => {
          console.log("Nuevo state ", this.state);
        });
      });
    };

    handleCountryChange = (newCountry) => {
      fetchData(newCountry).then((data) => {
        console.log("resultado refinado para el pais", newCountry, data);
        this.setState({data: data, country: newCountry}, () => {
          console.log("Nuevo state country", this.state);
        });
      });
      // setState({data: state.data, country: newCountry});
    }

    render() {
      return (
        <div className={styles.container}>
          <Cards data={this.state.data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={this.state.data} country= {this.state.country}/>
        </div>
      );
    }
}

export default App;
