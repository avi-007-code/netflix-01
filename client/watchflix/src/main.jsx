import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/common/Header'
import './main.css'

const Example =()=>{
  alert('Hellll oooo ooooo');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Header name={"Bharath"} age={20} fun={Example}/>

  </StrictMode>
)
