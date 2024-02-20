import { useState ,createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Quiz from './Quiz';

export const questionContext=createContext()
function App() {
  const [question, setQuestion] = useState([])

  return (
    <>
    <questionContext.Provider value={{question,setQuestion}}>
      <Quiz/>
    </questionContext.Provider>
    </>
  )
}

export default App
