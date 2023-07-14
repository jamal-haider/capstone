import './App.css'
import Layout from "./components/Layout"
import Photos from './pages/Photos'
import NoPage from "./pages/Nopage"
import Cart from './pages/Cart'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextProvider } from './AppContext'

function App() {

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Photos />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
