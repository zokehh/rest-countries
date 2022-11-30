import classes from './MainNavigation.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { useContext } from 'react'
import CountryContext from '../../store/country-context'
import { useEffect } from 'react'

const MainNavigation = () => {
    const ctx = useContext(CountryContext)

    const inputOnChangeHandler = (event) => {
        ctx.setQuery(event.target.value)
    }

    useEffect(() => {
        const filteredCountries = ctx.countries.filter(item => item.name.common.toLowerCase().includes(ctx.query.toLowerCase()))
        ctx.setFiltered(filteredCountries)
    }, [ctx.query])

    useEffect(() => {
        const selectedCountries = ctx.countries.filter(item => item.region.toLowerCase().includes(ctx.selects.toLowerCase()))
        ctx.setFiltered(selectedCountries)
    }, [ctx.selects])   

    return (
        <div className={ctx.darkMode ? classes.light : classes.dark}>
            <div className={classes.search}>
                <AiOutlineSearch className={classes.icon} />
                <input onChange={inputOnChangeHandler} type="text" id="search" placeholder='Search for a country...' />
            </div>

            <div className={classes.filter}>
                <select onChange={e => ctx.setSelects(e.target.value)} name="filter" id="filterByRegion">
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="america">America</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default MainNavigation