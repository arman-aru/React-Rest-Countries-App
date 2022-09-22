// import { useEffect, useState } from 'react';
import './App.css';
import './componants/Country/Country.css';
import Country from './componants/Country/Country';
// import Person from './componants/Person/Person';
import SingleCountry from './componants/SingleCountry/SingleCountry';

function App() {
  return ( 
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Country></Country>
      {/* <Person></Person> */}
      <SingleCountry></SingleCountry>
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(() =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   }, [])
//   return(
//     <div>
//       <h1>Visiting Every Country of The World !!!</h1>
//       <h2>Available Country: {countries.length}</h2>
//       {
//         countries.map(country => <Countries name={country.name.common} population={country.population}></Countries>)
//       }
//     </div>
//   )
// }

// function Countries(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;
