import { useState } from 'react'
import styles from '../../styles/login.module.css'
import Image from 'next/future/image'


export default function Bienvenida1({setCambio,setCarga}) {

  const [inicio,setInicio]=useState(true)
  if( inicio){
    setTimeout(() => {
      setCambio(true)
      setInicio(false)
      setCarga(false)
    }, 1000);
  return (
    
    <div className={styles.contenedor1 } >
      <div >
        <Image  src='/img/letras.png' width={300} height={100} alt='Logo Zwappy'/>
      </div>

    </div>
    
  )}
}
