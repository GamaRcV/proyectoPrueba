
import styles from '../../../styles/registro.module.css'

export default function Registro1({setRegistro1,setRegistro2}) {
    function cambiar(){
        setRegistro1(false)
        setRegistro2(true)
    }
  return (
    <main className={styles.contenedor}>
            <div className={styles.contenedor_contenido}>
                <div className={styles.centrar}>
                    <h1 className={styles.titulo}>Registrate facil</h1>
                    <p className={styles.texto}>Podras registrarte con tus datos o<br/>
                    solamente seleccionando una cuenta<br/>
                    vinculada o una red social</p>
                </div>
                <div className={styles.contenenedor_slider}>
                    <div className={styles.elipse}></div>
                    <div className={styles.circulo}></div>
                    <div className={styles.circulo}></div>
                </div>
                <div className={styles.contenedorBoton}>
                    <button onClick={cambiar} className={styles.boton}>Siguiente</button>
                </div>
            </div>
        </main>
  )
}
