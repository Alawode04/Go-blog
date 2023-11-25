import {Route, Routes} from 'react-router-dom'
import NavigationBar from './components/navbars/NavigationBar'
import HomePage from './components/HomePage'
import './App.css'
import ContactUs from './components/contact/ContactUs'
import AddNewPost from './components/post/AddNewPost'

function App() {
 

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/add-post' element={<AddNewPost/>} />
      </Routes>
    </>
  )
}

export default App
