
import styles from '../../styles/tablas.module.css'

export default function TablaItem({id,letra,nombre,promocion,recompensa,caducidad,hora}) {
  return (
    <>
    <tr className={styles.tableItems}>
      
          <td className={styles.itemData}>{id}</td>
          <td className={styles.itemNombre}><div><span className={styles.letra}>{letra}</span><span>{nombre}</span></div></td>
          <td className={styles.itemPromocion}>{ promocion}</td>
          <td className={styles.itemData}>{recompensa}</td>
          <td className={styles.itemCaducidad}>{caducidad}<br/>{hora}</td>
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
