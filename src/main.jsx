import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Layout />
  </Router>,
)