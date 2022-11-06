import styles from '../../styles/totalPromociones.module.css'
import TablaItem from './tablaItem'


export default function PromocionesTotales({setHomeContenido,setTotalPromociones}) {

    function back(){
        setHomeContenido(true)
        setTotalPromociones(false)
      }

  return (
    <div className={styles.contenedor__Principal}>
        <p className={styles.texto}>Listado completo de tus <span>reservaciones del dia</span></p>
        <div className={styles.volver}><i onClick={back} className="bi bi-chevron-left"></i></div>
        <div className={styles.contenedorTabla}>
      <table className={styles.tabla}>
        <tbody>
          <tr className={styles.contenedorTablaHeading}>
            <th className={styles.tableHeading}>#</th>
            <th className={styles.tableHeading}>Nombre</th>
            <th className={styles.tableHeading}>Promocion</th>
            <th className={styles.tableHeading}>Recompensa</th>
            <th className={styles.tableHeading}>Caducidad</th>
            <th className={styles.tableHeading}>Estatus</th>
          </tr>
          <TablaItem
            id={'TP01'}
            letra={'D'}
            nombre={'Deyner Ribon Garcia'}
            promocion={'Brown4days'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2019'}
            hora={'6:37pm'}
          />
          <TablaItem
            id={'TP02'}
            letra={'G'}
            nombre={'Gamaliel Méndez Pablo'}
            promocion={'AGUAYPAN'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2022'}
            hora={'6:38pm'}
          />
          <TablaItem
            id={'TP03'}
            letra={'JJ'}
            nombre={'Jose de Jesus Sanchez Peña'}
            promocion={'Weluvlupulosa'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2022'}
            hora={'6:38pm'}
          />
          <TablaItem
            id={'TP04'}
            letra={'LD'}
            nombre={'Leidy Diana Rojas'}
            promocion={'Aguaypan'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2022'}
            hora={'6:38pm'}
          />
          <TablaItem
            id={'TP01'}
            letra={'D'}
            nombre={'Deyner Ribon Garcia'}
            promocion={'Brown4days'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2019'}
            hora={'6:37pm'}
          />
          <TablaItem
            id={'TP02'}
            letra={'G'}
            nombre={'Gamaliel Méndez Pablo'}
            promocion={'AGUAYPAN'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2022'}
            hora={'6:38pm'}
          />
          <TablaItem
            id={'TP03'}
            letra={'JJ'}
            nombre={'Jose de Jesus Sanchez Peña'}
            promocion={'Weluvlupulosa'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2022'}
            hora={'6:38pm'}
          />
          <TablaItem
            id={'TP04'}
            letra={'LD'}
            nombre={'Leidy Diana Rojas'}
            promocion={'Aguaypan'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2022'}
            hora={'6:38pm'}
          />

        </tbody>
      </table>
    </div>
    </div>
  )
}
