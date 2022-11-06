import { useState } from "react"
import Head from "next/head"
import Bienvenida1 from "../components/login/bienvenida1"
import Bienvenida2 from "../components/login/bienvenida2"
import Bienvenida3 from "../components/login/bienvenida3"
import Bienvenida4 from "../components/login/bienvenida4"
import InicioSesion from "../components/login/inicioSesion"

import LoginSesion from "../components/login/Iniciarsesion/loginSesion"

import Registro1 from "../components/login/registrarse/registro1"
import Registro2 from "../components/login/registrarse/registro2"
import Registro3 from "../components/login/registrarse/registro3"
import styles from '../styles/login.module.css'

export default function Login({setIniciarLogin,setIndex}) {

  const [carga,setCarga]=useState(true)
  const [cambio, setCambio]= useState(false)
  const [cambio2,setCambio2]=useState(false)
  const [cambio3,setCambio3]=useState(false)
  const [sesion, setSesion]= useState(false)
  
  const [iniciarSesion, setIniciarSesion]=useState(false)

  const [registro1,setRegistro1]= useState(false)
  const [registro2,setRegistro2]=useState(false)
  const [registro3, setRegistro3]=useState(false)
  return (
    
    <div className={styles.contenedor_login}>
      {/* Pantallas bienvenida */}
      <Head>
        <title>Zwappy - Inicia sesión o regístrate</title>
        <meta name="description" content="Zwappy red social por y para los influenmcers"/>
      </Head>
      {carga && 
      <Bienvenida1
        setCambio={setCambio}
        setCarga={setCarga}
      />}
      {cambio && 
      <Bienvenida2
        setCambio={setCambio}
        setCambio2={setCambio2}
      />}
      {cambio2 && 
      <Bienvenida3
        setCambio2={setCambio2}
        setCambio3={setCambio3}
      />}

      {cambio3&& 
      <Bienvenida4
        setCambio3={setCambio3}
        setSesion={setSesion}
      />}


      {/* Pantalla para iniciar sesion o registrarse  */}
      {sesion&& 
      <InicioSesion
      setSesion={setSesion}
      setRegistro1={setRegistro1}
      setIniciarSesion={setIniciarSesion}
      />}

      {/* Pantallas de guia registro  */}
      {registro1 && 
      <Registro1
        setRegistro1={setRegistro1}
        setRegistro2={setRegistro2}      
      />}

      {registro2&& 
      <Registro2
        setRegistro2={setRegistro2}
        setRegistro3={setRegistro3}
      />}
      {registro3 && <Registro3/>}
      
      {/* Inicio de sesion cuenta creada */}
        {iniciarSesion && 
        <LoginSesion
          setSesion={setSesion}
          setIniciarSesion={setIniciarSesion}
          setRegistro1={setRegistro1}
        />}
      
    </div>


  )

}
