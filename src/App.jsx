import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Abt from './components/abt'
import Tech from './components/Tech'
import Exp from './components/Exp'
import Pjts from './components/Pjts'
import Cnt from './components/Cnt'
import Edu from './components/Edu'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden text-white antialiased selection bg-blue-950 selection:text-blue-400'>
<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] "></div>

   <Navbar/>
   <Main/>
 {/* <Abt/> */}
 <Tech/>
 <Exp/>
 <Pjts/>
 <Edu/>
 <Cnt/>
    </div>
  )
}

export default App
