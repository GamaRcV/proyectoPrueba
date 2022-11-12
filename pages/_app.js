import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [paginaLista,setPaginaLista]=useState(false)
  const [logeado, setLogeado]=useState('no logeado')
  useEffect(()=>{
    setPaginaLista(true)
  },[])
  return paginaLista ?<Component {...pageProps} /> : null
}

export default MyApp
