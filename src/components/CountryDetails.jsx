import classes from './CountryDetails.module.css'

const CountryDetails = (props) => {
    return (
        <div className={classes.container}>
            <img className={classes.flag} src={props.items.flags.png} alt="" />

            <div className={classes.info1}>
                <h1>{props.items.name.common}</h1>
                <p>Native Name: {props.items.name.official}</p>
                <p>Population: {props.items.population}</p>
                <p>Region: {props.items.region}</p>
                <p>Sub Region: {props.items.subregion}</p>
                <p>Capital: {props.items.capital}</p>
            </div>

            <br />

            <div className={classes.info2}>
                <p>Top Level Domain: {props.items.tld}</p>
                <p>Continet: {props.items.continents.map(item => item)}</p>
                <p>Timezones: {props.items.timezones.map(item => item + ', ')}</p>
            </div>
        </div>
    )
}

export default CountryDetails