import Layout from './layout/Layout'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard/Dashboard.jsx'
import Customers from './views/Customers/Customres.jsx'
function App() {

  return (
    <>
    <Router>
      <Layout/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/customers" element={<Customers/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
