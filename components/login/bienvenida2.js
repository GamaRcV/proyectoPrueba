
import Image from "next/future/image"
import styles from '../../styles/login.module.css'

export default function Bienvenida2({setCambio,setCambio2}) {

    function cambiar(){
        setCambio(false)
        setCambio2(true)
    }
    return (
        <main className={styles.contenedor2}>
            <div className={styles.contenedor2_contenido}>
                <div className={styles.centrar}>
                    <Image className={styles.logo} src='/img/letras.png' width={171} height={43} alt='Logo Zwappy' />
                    <h1 className={styles.titulo}>Explora todas nuestras <span className={styles.titulo_Grande}> experiencias</span></h1>
                </div>
                
                <div className={styles.divBtn}>
                    <div className={styles.contenenedor_slider}>
                        <div className={styles.elipse}></div>
                        <div className={styles.circulo}></div>
                        <div className={styles.circulo}></div>
                    </div>
                    <button onClick={cambiar} className={styles.boton}>Siguiente</button>
                </div>
            </div>
        </main>
    )
}
