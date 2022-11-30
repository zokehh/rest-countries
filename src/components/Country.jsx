import classes from './Country.module.css'
import { useContext } from 'react'
import CountryContext from '../store/country-context'

const Country = (props) => {
    const ctx = useContext(CountryContext)

    return (
        <div className={ctx.darkMode ? classes.light : classes.dark}>
            <img src={props.image} alt="" />
            <div className={classes.info}>
                <h1>{props.name}</h1>
                <p><span className='bold'>Population: </span> {props.population}</p>
                <p><span className='bold'>Region: </span> {props.region}</p>
                <p><span className='bold'>Capital City: </span> {props.capital}</p>
            </div>
        </div>
    )
}

export default Country