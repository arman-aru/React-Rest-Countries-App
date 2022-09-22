import React from 'react';
import './SingleCountry.css'

const SingleCountry = (props) => {
    return (
        <div className='single-country'>
            <h2>Name: {props.name}</h2>
            <img src={props.flag} alt="flag" />
            <h4>Population: {props.population}</h4>
            <h4>Capital City: {props.capital}</h4>
            <h4>Region: {props.region}</h4>
        </div>
    );
};

export default SingleCountry;