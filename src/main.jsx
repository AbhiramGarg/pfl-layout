
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Projects from './components/Projects.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    <Route path='/pfl-layout' element={<App/>}/>
    <Route path='/pfl-layout/projects' element={<Projects/>}/>
  </Routes>
</BrowserRouter>,
)
