import { useState,useEffect } from 'react'
import Image from 'next/future/image'
import styles from '../../../styles/loginSesion.module.css'

export default function LoginSesion({setSesion,setIniciarSesion,setRegistro1}) {

  const [ojo, setOjo]=useState(false)
  const [usuario,setUsuario]= useState('')
  const [contraseña,setContraseña]=useState('')
  const [advertenciaInput,setAdvertenciaImput]=useState(false)
  const [advertencia, setAdvertencia]=useState(false)
  

  function volver(){
    setSesion(true)
    setIniciarSesion(false)
  }
  function registrarse(){
    setIniciarSesion(false)
    setRegistro1(true)
  }
  const handleSubmit= e=> {
    e.preventDefault();
    if ([usuario, password].includes('')) {
      console.log('datos incompletos')
  }
  }
  function direccion(){
    if(typeof window !== 'undefined'){
      if(usuario=== 'gama@baralabs.com' & contraseña === 'gamaop'){
        window.location.href='/home'
        
      } else{
        setAdvertenciaImput(true)
        setAdvertencia(true)
      }
    }
  }

  function ErrorContraseña(){
    setAdvertenciaImput(false)
    setAdvertencia(false)
  }

  return (
    <main>
      <div className={styles.contenedor}>
        <div className={styles.contenedorCrearcuenta}>
          <button onClick={volver} className={styles.back}><i className="bi bi-arrow-left"></i></button>
          <a onClick={registrarse} className={styles.color_letra}>Crear cuenta</a>
        </div>
        <h1 className={styles.titulo}>Ingresa!</h1>
        <div className={styles.contenedor_form}>
          <form onSubmit={handleSubmit} className={styles.contenedor_form}>
            <div className={styles.contenedor_input}>
              <label htmlFor='correo' className={styles.label}>Correo electronico</label>
              <input onChange={e=> setUsuario(e.target.value)} id='correo' className={styles.input} type='email' placeholder='ejemplo@zwappy.com'/>
            </div>
            <div  className={advertenciaInput ? styles.contenedor_input2Activo : styles.contenedor_input2}>
              <div className={styles.contenedor_contraseña}>
                <input onClick={ErrorContraseña} onChange={e=> setContraseña(e.target.value)} id='password' className={styles.input2} type={ojo ? 'text' : 'password'} placeholder='Ingrese su contraseña'/>
                <i onClick={()=> ojo? setOjo(false): setOjo(true)} className={ojo ? 'bi bi-eye': 'bi bi-eye-slash' }></i>
              </div>
            </div>
            <i className={advertencia ? "bi bi-exclamation-lg advertencia" : ''}></i>
            <a className={styles.olvidoContraseña}>¿Olvidaste tu contraseña?</a>
            <div className={styles.contenedor_check}>
              <input type='checkbox'/>
              <label className={styles.textoCheck}>Recordarme</label>
            </div>
            <button onClick={direccion} className={styles.botonSesion} type='submit'>Ingresar</button>
          </form>  
        </div>
        <div className={styles.contenedor_Opciones}>
          <h3>Crear o continuar con</h3>
          <div className={styles.contenedor_logos}>
            <div><Image className={styles.logo_tamaño} src='/img/inicioSesion/logo_facebook.png' width={20} height={20} alt='Logo Facebook'/></div>
            <div><Image className={styles.logo_tamaño} src='/img/inicioSesion/logo_google.png' width={20} height={20} alt='Logo Google'/></div>
            <div><Image className={styles.logo_tamaño} src='/img/inicioSesion/logo_tiktok.png' width={20} height={20} alt='Logo Tiktok'/></div>
          </div>
          <div className={styles.contenedor_texto}>
            <p>Ya tienes una cuenta? <label className={styles.color} htmlFor='correo'>Iniciar sesion</label></p>
          </div>
          
        </div>
      </div>
    </main>
  )
}
