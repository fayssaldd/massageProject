import './App.css'
import { Button } from "@/components/ui/button"
import NavBar from './pages/NavBar'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
