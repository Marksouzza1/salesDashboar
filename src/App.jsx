import Layout from './layout/Layout'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard/Dashboard.jsx'
import CustomerForm from './views/Customers/CustomerForm.jsx'
function App() {

  return (
    <>
    <Router>
      <Layout/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/customerForm" element={<CustomerForm/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
