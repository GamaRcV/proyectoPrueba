import styles from '../../styles/totalPromociones.module.css'
import TablaItemPromociones from './tablaItemPromociones'


export default function PromocionesPublicadas({setHomeContenido,setPromocionesPublicadas}) {

    function back(){
        setHomeContenido(true)
        setPromocionesPublicadas(false)
      }
  return (
    <div className={styles.contenedor__Principal}>
        <p className={styles.texto}>Listado completo de tus <span>promociones publicadas</span></p>
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
          <TablaItemPromociones
            id={'TP01'}
            letra={'D'}
            nombre={'Deyner Ribon Garcia'}
            promocion={'Brown4days'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2019'}
            hora={'6:37pm'}
          />
          <TablaItemPromociones
            id={'TP02'}
            letra={'G'}
            nombre={'Gamaliel Méndez Pablo'}
            promocion={'AGUAYPAN'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2022'}
            hora={'6:38pm'}
          />
          <TablaItemPromociones
            id={'TP03'}
            letra={'JJ'}
            nombre={'Jose de Jesus Sanchez Peña'}
            promocion={'Weluvlupulosa'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2022'}
            hora={'6:38pm'}
          />
          <TablaItemPromociones
            id={'TP04'}
            letra={'LD'}
            nombre={'Leidy Diana Rojas'}
            promocion={'Aguaypan'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2022'}
            hora={'6:38pm'}
          />
          <TablaItemPromociones
            id={'TP01'}
            letra={'D'}
            nombre={'Deyner Ribon Garcia'}
            promocion={'Brown4days'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2019'}
            hora={'6:37pm'}
          />
          <TablaItemPromociones
            id={'TP02'}
            letra={'G'}
            nombre={'Gamaliel Méndez Pablo'}
            promocion={'AGUAYPAN'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2022'}
            hora={'6:38pm'}
          />
          <TablaItemPromociones
            id={'TP03'}
            letra={'JJ'}
            nombre={'Jose de Jesus Sanchez Peña'}
            promocion={'Weluvlupulosa'}
            recompensa={'ESPECIE/Producto Gratis'}
            caducidad={'09-12-2022'}
            hora={'6:38pm'}
          />
          <TablaItemPromociones
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
