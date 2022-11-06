import Image from "next/future/image"
import styles from '../../styles/login.module.css'


export default function Bienvenida4({setSesion,setCambio3}) {
    function cambiar(){
        setSesion(true)
        setCambio3(false)
    }
    return (
        <main className={styles.contenedor2}>
            <div className={styles.contenedor4_contenido}>
                <div className={styles.centrar}>
                    <Image className={styles.logo} src='/img/letras.png' width={171} height={43} alt='Logo Zwappy' />
                    <h1 className={styles.titulo}>Reserva y <span className={styles.span}>comparte</span> <span className={styles.titulo_Grande}> tu experiencia</span></h1>
                </div>
                <div className={styles.contenenedor_slider}>
                    <div className={styles.circulo}></div>
                    <div className={styles.circulo}></div>
                    <div className={styles.elipse}></div>
                </div>
                <div>
                    <button onClick={cambiar} className={styles.boton}>Empecemos</button>
                </div>
            </div>
        </main>
    )
}


