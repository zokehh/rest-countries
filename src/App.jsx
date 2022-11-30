import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout/Layout"
import { useContext } from "react"
import CountryContext from "./store/country-context"
import Details from "./pages/Details"

const App = () => {
    const ctx = useContext(CountryContext)

    return (
        <Layout>
            <div className={ctx.darkMode ? 'light' : 'dark'}>
                <Routes>
                    <Route path='/countries' element={<Home />} />
                    <Route path="/countries/:countryId" element={<Details />} />
                    <Route path="*" element={<Navigate to='/countries' />} />
                </Routes>
            </div>
        </Layout>
    )
}

export default App
