import { createContext } from 'react'
import styled from 'styled-components'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Nurse from './Nurse'
import Doctor from './Doctor'

import { Button, Container } from '@mui/material'

import {
  MedicalServicesRounded,
  HealthAndSafetyOutlined
} from '@mui/icons-material'


const internArray = ['Joe', 'Monica', 'Sally', "Nitzer Ebb"]
const internContext = createContext(internArray)

function App() {
  return (
    <Container>
      <Router>
        <Button href="/nurse" onClick={e => e.preventDefault()} variant="contained" startIcon={<MedicalServicesRounded /> }>Nurse Page</Button>
        <Button href="/doctor" onClick={e => e.preventDefault()} startIcon={ <HealthAndSafetyOutlined/>} >Doctor Page</Button>
        {/* <Link to="/nurse">Nurse Page</Link>
        <Link to="/doctor">Doctor Page</Link> */}
        <Routes>
          <Route path="/nurse" element={<Nurse />} />
          <Route path="/doctor" element={<Doctor interns={internArray} />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App

export { internContext }

const menuItemMargin = 20

const OuterContainer = styled.div`
  ${'' /* background-color: #bada55; */}
  height: 100vh;
  a {
    margin: 0 ${menuItemMargin}px;
  }
`