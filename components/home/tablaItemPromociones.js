import { useState } from 'react'
import styles from '../../styles/tablas.module.css'

export default function TablaItemPromociones({id,letra,nombre,promocion,recompensa,caducidad,hora}) {

  const [iconoOn,setIconoOn]=useState(false)
  return (
    <>
    <tr className={styles.tableItems}>
          <td className={styles.itemData}>{id}</td>
          <td className={styles.itemNombre}><div><span className={styles.letra}>{letra}</span><span>{nombre}</span></div></td>
          <td className={styles.itemPromocion}>{ promocion}</td>
          <td className={styles.itemData}>{recompensa}</td>
          <td className={styles.itemCaducidad}><div className={styles.flexOn}>{caducidad}<br/>{hora} <i onClick={()=> iconoOn ? setIconoOn(false): setIconoOn(true)} className={iconoOn? "bi bi-toggle-on": "bi bi-toggle-off"}></i></div></td>
          <td className={styles.itemData}>
            <select>
              <option>Reservado ⚪</option>
              <option>Presente 🟣</option>
              <option>Finalizar 🔴</option>
              <option>Cancelado 🔴</option>
            </select>
          </td>
    </tr>
    
    
    
    </>
  )
}
