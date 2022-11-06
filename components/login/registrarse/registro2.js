import styles from '../../../styles/registro.module.css'

export default function Registro2({setRegistro2, setRegistro3}) {

    function cambiar(){
        setRegistro2(false)
        setRegistro3(true)
    }
    return (
        <main className={styles.contenedor}>
            <div className={styles.contenedor_contenido2}>
                <div className={styles.centrar}>
                    <h1 className={styles.titulo2}>Selecciona tus <br className={styles.block} /> preferencias</h1>
                    <p className={styles.texto2}>Pudes seleccionar tus intereses y <br /> vincular tus redes sociales.</p>
                </div>
                <div className={styles.contenenedor_slider2}>
                    <div className={styles.circulo}></div>
                    <div className={styles.elipse}></div>
                    <div className={styles.circulo}></div>
                </div>
                <div className={styles.contenedorBoton}>
                    <button onClick={cambiar} className={styles.boton}>Siguiente</button>
                </div>
            </div>
        </main>
    )
}