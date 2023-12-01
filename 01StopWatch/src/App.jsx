
import { Outlet } from 'react-router-dom'

import {Header,Footer} from './Component'
import { ThemeProvider } from './Component/Comp/ThemeContext'




function App() {
  return(
    <ThemeProvider >
    <Header/>
    <Outlet/>
    <Footer/>
    </ThemeProvider>
  )
}

export default App
