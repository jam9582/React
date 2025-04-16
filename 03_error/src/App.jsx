import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menu from './pages/Menu';
import Order from './pages/Order';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="order" element={<Order/>}/>
          </Route>
          <Route path="*" element={</>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
