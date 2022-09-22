import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';

const Country = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>React Rest Countries Simple App</h1>
            <h3>Total Country: {countries.length}</h3>
            <div className='all-country'>
                {
                countries.map( country => <SingleCountry    
                    key={country.cca3}
                    name={country.name.common} 
                    flag={country.flags.png}
                    population={country.population} capital={country.capital} 
                    region={country.region}
                    ></SingleCountry>)
            }
            </div>
        </div>
    );
};

export default Country;