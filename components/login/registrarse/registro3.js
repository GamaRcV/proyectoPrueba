import styles from '../../../styles/registro.module.css'

export default function Registro3() {
    return (
        <main className={styles.contenedor}>
            <div className={styles.contenedor_contenido3}>
                <div className={styles.centrar}>
                    <h1 className={styles.titulo}>Edita tu perfil</h1>
                    <p className={styles.texto}>Podras editar tu perfil modificando tus <br/>
                        datos, redes e intereses.
                    </p>
                </div>
                <div className={styles.contenenedor_slider}>
                    <div className={styles.circulo}></div>
                    <div className={styles.circulo}></div>
                    <div className={styles.elipse}></div>
                </div>
                <div className={styles.contenedorBoton}>
                    <button className={styles.boton}>Siguiente</button>
                </div>
            </div>
        </main>
    )
}
