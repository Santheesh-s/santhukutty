import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import './index.css'
    import Form from './form.jsx';
    import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
    import './App.css'
    import App from './App';

    createRoot(document.getElementById('root')).render(
      <StrictMode><center>
        <BrowserRouter>
          <nav>
            <Link to="/App" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/form">Form</Link>
          </nav>
            <Routes>
              <Route path="/App" element={<App />} />
              <Route path="/form" element={<Form />} />
            </Routes>
        </BrowserRouter>
        </center>
      </StrictMode>,
    )
