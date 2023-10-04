import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from 'axios'
import {BrowserRouter} from  "react-router-dom"
axios.defaults.baseURL="https://api.devempower.ir/TicketierAPI"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
