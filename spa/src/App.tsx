import { useEffect } from 'react'
import axios from 'axios'
import HomePage from './pages/Home/HomePage';

function App() {
  useEffect(() => {
    axios.interceptors.request.use(
      async config => {
        config.baseURL = (import.meta as any).env.VITE_API_URL;
        return config;
      },
      error => {
        return Promise.reject(error)
      }
    )
  }, []);

  return <HomePage />
}

export default App
