import Link from 'next/link'
import Image from 'next/future/image'
import styles from '../styles/header.module.css'
import {  useRouter } from 'next/router'

export default function Header() {
  const router=useRouter()
  return (
    <div className={styles.sitio}>
      <div className={styles.header__container}>
        
          <Image className={styles.imagen_letras} src='/img/letras.png' width={170} height={140} alt='Logo Zwappy' />
          <Link href='/billing'>
            <a className={styles.a}><button className={router.pathname === '/billing' ? styles.button2 :styles.button}> <i className="bi bi-wallet2 wallet" ></i><span className={styles.credito}>Mi saldo <span className={styles.money}>$200</span></span></button></a>
          </Link>
          <i className="bi bi-justify of"></i>
      </div>
    </div>
  )
}
