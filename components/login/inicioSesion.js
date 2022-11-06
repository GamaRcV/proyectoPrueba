import Image from "next/future/image"
import styles from '../../styles/login.module.css'

export default function InicioSesion({setSesion,setRegistro1,setIniciarSesion}) {
  function cambiar(){
    setSesion(false)
    setRegistro1(true)
  }
  function iniciarSesion(){
    setIniciarSesion(true)
    setSesion(false)
  }
  return (
    <div className={styles.contenedor2}>
      <div className={styles.contenedor_sesion}>
        <div className={styles.centrar}>
          <Image className={styles.logo} src='/img/letras.png' width={171} height={43} alt='Logo Zwappy' />
          <div >
            <Image className={styles.notificacion1} src='/img/login/notificacion.png' width={196} height={71.18} alt='Notificacion' />
            <Image className={styles.notificacion2} src='/img/login/notificacion2.png' width={196} height={71.18} alt='Notificacion' />
          </div>
        </div>
        <div className={styles.contenedor_tituloSesion}>
          <h1 className={styles.titulo}>¡Unete a Zwappy y <span className={styles.block}>crea tu comunidad!</span></h1>
        </div>
        <div className={styles.contenedorBotones}>
          <button onClick={iniciarSesion}  className={styles.boton}>Iniciar sesión</button>
          <button onClick={cambiar} className={styles.boton}>Registrate</button>
        </div>
      </div>
    </div>
  )
}
