import Image from "next/future/image"
import Link from "next/link"
import styles from '../styles/navegacion.module.css'
import { useRouter } from "next/router"

export default function Navegacion() {
    const router = useRouter()

    function salir(){
       const respuesta =confirm('Esta seguro que desea salir?')
       if(respuesta){
        window.location.href='/'
       }else{
        return
       }
    }
    return (
            <div className={styles.navegacion}>

                <div className={styles.center}>
                    <Link href='/perfil'>
                        <a className={styles.a}><button className={styles.button}> <Image className={styles.logo} src='/img/establecimiento.png' width={100} height={50} alt='Establecimiento' /></button><span className={styles.establecimiento}>Insurgente <span className={styles.establecimiento__tipo}>Bar <span className={styles.borde_texto}></span></span></span></a>
                    </Link>
                </div>
                <div className={router.pathname === '/perfil' ? styles.center2 : styles.center}>
                    <Link href='/perfil'>
                        <a className={styles.a}><button className={router.pathname === '/perfil' ? styles.button2 : styles.button}> <i className="bi bi-person-circle icono"></i><span className={router.pathname === '/perfil' ? styles.texto2 : styles.texto}>Perfil </span></button></a>
                    </Link>
                </div>
                <div className={router.pathname === '/home' ? styles.center2 : styles.center}>
                    <Link href='/home'>
                        <a className={styles.a}><button className={router.pathname === '/home' ? styles.button2 : styles.button}> <i className="bi bi-list-task icono"></i><span className={router.pathname === '/home' ? styles.texto2 : styles.texto}>Marketing</span></button></a>
                    </Link>
                </div>
                <div className={router.pathname === '/billing' ? styles.center2 : styles.center}>
                    <Link href='/billing'>
                        <a className={styles.a}><button className={router.pathname === '/billing' ? styles.button2 : styles.button}> <i className="bi bi-piggy-bank icono"></i><span className={router.pathname === '/billing' ? styles.texto2 : styles.texto}>Billing</span></button></a>
                    </Link>
                </div>
                <div className={router.pathname === '/soporte' ? styles.center2 : styles.center}>
                    <Link href='/soporte'>
                        <a className={styles.a}><button className={router.pathname === '/soporte' ? styles.button2 : styles.button}> <i className="bi bi-question-circle icono"></i><span className={router.pathname === '/soporte' ? styles.texto2 : styles.texto}>Soporte</span></button></a>
                    </Link>
                </div>
                <div className={styles.center}></div>
                <div className={styles.center}>
                    <Link href=''>
                        <a className={styles.a}><button onClick={salir}  className={router.pathname === '/login' ? styles.button2 : styles.button}> <i className="bi bi-box-arrow-right icono"></i><span className={router.pathname === '/salir' ? styles.texto2 : styles.texto}>Salir</span></button></a>
                    </Link>
                </div>
            </div>

        
    )
}
