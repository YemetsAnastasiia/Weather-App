import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Layout from 'pages/WeatherApp/Layout/Layout'
import Home from 'pages/WeatherApp/Home/Home'
import WeatherHistory from 'pages/WeatherApp/WeatherHistory/WeatherHistory'


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/weatherHistory' element={<WeatherHistory/>}/> 
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App