import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [paginaLista,setPaginaLista]=useState(false)

  useEffect(()=>{
    setPaginaLista(true)
  },[])
  return paginaLista ?<Component  {...pageProps} /> : null
}

export default MyApp
