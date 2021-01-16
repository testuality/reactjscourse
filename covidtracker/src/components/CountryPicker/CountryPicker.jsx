import React from "react";
import {useState, useEffect} from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import {fetchCountries} from "./../../api/index";

const CountryPicker = ({handleCountryChange}) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchCountries().then((data) => {
            console.log("useeffect countries data ", data);
            setCountries(data);
        });
    }, []);

    const onCountryChange = (event) => {
        console.log("Contry has changed ", event.target.value);
        handleCountryChange(event.target.value);
    }

    return (
        <div>
            <FormControl className={styles.formControl}> 
                <NativeSelect
                    defaultValue="" 
                    onChange={onCountryChange}>
                    <option value="global">Global</option>
                    {
                        countries.map((country, index) => {
                            return (
                                <option key={index} value={country.name}>{country.name}</option>
                            );
                        })
                    }
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default CountryPicker;