import CountryContext from "../store/country-context";
import { useContext } from "react";
import Country from "./Country";
import classes from './Countries.module.css'
import { Link } from "react-router-dom";

const Countries = () => {
  const ctx = useContext(CountryContext);

  return (
    <div className={classes.container}>
      {ctx.filtered.map((item) => (
        <Link key={Math.random()} to={item.name.common}>
          <Country
            key={Math.random()}
            image={item.flags.png}
            name={item.name.common}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        </Link>
      ))}
    </div>
  );
};

export default Countries;
