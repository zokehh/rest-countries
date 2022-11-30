import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CountryDetails from "../components/CountryDetails"
import classes from '../components/Details.module.css'
import { useContext } from "react"
import CountryContext from "../store/country-context"

const Details = () => {
    const [localCountries, setLocalCountries] = useState([])
    const params = useParams()

    const ctx = useContext(CountryContext)

    const endpoint = params.countryId

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${endpoint}`)
            const data = await response.json()
            setLocalCountries(data)
        }
        fetchData()
    }, [endpoint])

    return (
        <div className={classes.container}>
            <Link className={classes.button} to='/countries'>&larr; Back</Link>
            {localCountries.map(item => <CountryDetails key={Math.random()} items={item} />)}
        </div>
    )
}

export default Details