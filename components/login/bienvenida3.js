import Image from "next/future/image"
import styles from '../../styles/login.module.css'

export default function Bienvenida3({setCambio2,setCambio3}) {

   function cambiar(){
    setCambio2(false)
    setCambio3(true)
   }
    return (
        <main className={styles.contenedor2}>
            <div className={styles.contenedor3_contenido}>
                <div className={styles.centrar}>
                    <Image className={styles.logo} src='/img/letras.png' width={171} height={43} alt='Logo Zwappy' />
                    <h1 className={styles.titulo}>Preparate para  <span className={styles.titulo_Grande}>divertirte</span></h1>
                </div>
                <div className={styles.divBtn}>
                    <div className={styles.contenenedor_slider}>
                        <div className={styles.circulo}></div>
                        <div className={styles.elipse}></div>
                        <div className={styles.circulo}></div>
                    </div>
                    <button onClick={cambiar} className={styles.boton}>Siguiente</button>
                </div>
            </div>
        </main>
    )
}
