import React ,{ useEffect} from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {
  useEffect(() => {
    document.title = 'GigaChad'; 
  }, []);
  return (
 <>
      <Sidebar/>
      <Main />
 </>
      
  
  )
}

export default App
