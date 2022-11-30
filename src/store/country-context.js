import React, { useEffect, useState } from "react";

const CountryContext = React.createContext({
  countries: [],
  setCountries: () => {},
  query: '',
  setQuery: () => {},
  selects: '',
  setSelects: () => {},
  darkMode: '',
  toggleDarkMode: () => {}
});

export const CountryContextProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([])
  const [query, setQuery] = useState("");
  const [selects, setSelects] = useState('')
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      setFiltered(data)
    };
    fetchData();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevState => !prevState)
  }

  return (
    <CountryContext.Provider
      value={{
        countries: countries,
        setCountries: setCountries,
        query: query,
        setQuery: setQuery,
        filtered: filtered,
        setFiltered: setFiltered,
        selects: selects,
        setSelects: setSelects,
        darkMode: darkMode,
        toggleDarkMode
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
