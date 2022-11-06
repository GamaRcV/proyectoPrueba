import styles from '../../styles/nuevaPromocion.module.css'

export default function NuevaPromocion({setHomeContenido,setNuevaPromocion}) {

  function back(){
    setHomeContenido(true)
    setNuevaPromocion(false)
  }
  return (
    <div className={styles.contenedor__Principal}>
      <div className={styles.back}>
        <i onClick={back} className="bi bi-chevron-left"></i>
      </div>
      <h3>Selecciona el tipo de promocion que quieres publicar</h3>
    </div>
  )
}
