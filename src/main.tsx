import React from 'react'
import ReactDOM from 'react-dom/client'
import Habitat from './components/Habitat/Habitat.tsx'

const title = 'SALVE MAYCON';
const banner = './assets/img/banner.jpg';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Habitat title={title} banner={banner}></Habitat>
  </React.StrictMode>,
)
