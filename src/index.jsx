import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {CountryContextProvider} from '../src/store/country-context'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CountryContextProvider>
            <App />
        </CountryContextProvider>
    </BrowserRouter>
)
