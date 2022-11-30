import classes from './Layout.module.css'
import CountryContext from "../../store/country-context"
import { useContext } from "react"

const Layout = (props) => {
    const ctx = useContext(CountryContext)
    const isDark = ctx.darkMode

    const tDarkMode = () => {
        ctx.toggleDarkMode()
    }

    return (
        <div>
            <div className={ctx.darkMode ? classes.light : classes.dark}>
                <h1>Where in the world?</h1>
                <p className={classes.darkModeParagraph} onClick={tDarkMode}>{isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}</p>
            </div>

            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout