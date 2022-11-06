import { useState } from 'react'
import NuevaPromocion from '../components/home/nuevaPromocion '
import Promocion1 from '../components/home/promocion1'
import Promocion2 from '../components/home/promocion2'
import Promocion3 from '../components/home/promocion3'
import PromocionesTotales from '../components/home/promocionesTotales'
import Drafts from '../components/home/drafts'
import PromocionesPublicadas from '../components/home/promocionesPublicadas'
import styles from '../styles/home.module.css'
import Layout from "../components/layout"


export default function Home() {
  const [homeContenido,setHomeContenido]=useState(true)
  const [nuevaPromocion,setNuevaPromocion]=useState(false)
  const [nombrePromocion,setNombrePromocion]=useState('brown4days')
  const [promocion1,setPromocion1]=useState(true)
  const [promocion2,setPromocion2]=useState(false)
  const [promocion3,setPromocion3]=useState(false)
  const [totalPromociones,setTotalPromociones]=useState(false)
  const [drafts, setDrafts]=useState(false)
  const [promocionesPublicadas, setPromocionesPublicadas]=useState(false)

  function cambioPromocion1(){
    setPromocion1(true)
    setPromocion2(false)
    setPromocion3(false)
    setNombrePromocion('brown4days')
  }
 
  function cambioPromcion2(){
    setPromocion1(false)
    setPromocion2(true)
    setPromocion3(false)
    setNombrePromocion('welublupulosa')
  }
  function cambioPromcion3(){
    setPromocion1(false)
    setPromocion2(false)
    setPromocion3(true)
    setNombrePromocion('Aguaypan')
  }
  function AgregarPromocion(){
    setHomeContenido(false)
    setNuevaPromocion(true)
  }
  function promocionesTotales(){
    setTotalPromociones(true)
    setHomeContenido(false)
  }
  function cambioDraft(){
    setHomeContenido(false)
    setDrafts(true)
  }
  function cambioPromocionesPublicadas(){
    setHomeContenido(false)
    setPromocionesPublicadas(true)
  }
  return (
    <Layout
      title='Home'
      description='Zwappy marketing, promociones de establecimientos.'
    >
      <>
      {homeContenido&&
      <main className={styles.contenedor__Principal}>
        <div className={styles.side__left}>
          <div className={styles.side__leftContenedor1}>
            <button onClick={AgregarPromocion}  className={styles.btnAlta}>
              <div className={styles.contenedorIconoAlta}>
                <i className="bi bi-plus "></i>
              </div>
              <div>
                <p className={styles.textoBtnAlta}>Dar de alta<span className={styles.block}>nueva promoción</span><span className={styles.block}>{'(especie/descuento)'}</span></p>
              </div>
            </button>
            <div className={styles.bordeTop}></div>
            <div className={styles.bordeLeft}></div>
            <div className={styles.bordeRight}></div>
          </div>

          <div className={styles.leftContenedor2}>
            <h3 className={styles.tituloPromo}>Datos de la promoción</h3>
            <p className={styles.infoPromo}>Informacion relevante<br /> de tu promoción</p>
            <button className={styles.btnEditar}>Editar</button>
            <button className={styles.btnEliminar}>Eliminar</button>
            <p className={styles.costoPromo}><span>Costo</span> de promocion</p>
            <p className={styles.costo}>$350.00 M.N.</p>
          </div>

          <div className={styles.contenedorLeft3}>
            <div>
              <h3 className={styles.tituloAlcance}>Impactos</h3>
              <ul className={styles.listaAlcance}>
                <li><p>100 - 2,000 <span>-10 interacciones</span></p></li>
                <li><p>2,001 - 10,000 <span>-5 interacciones</span></p></li>
                <li><p>10,001 - 50,000 <span>-5 interacciones</span></p></li>
              </ul>
            </div>
            <div>
              <h3 className={styles.tituloAlcance}>Categorías de promoción</h3>
              <ul className={styles.listaAlcance}>
                <li><p>comida</p></li>
                <li><p>cerveceria</p></li>
                <li><p>vida nocturna</p></li>
              </ul>
            </div>

            <div>

            </div>
          </div>
        </div>


        {/* Parte derecha del contenido */}

        <div className={styles.sideRight}>
          <div>
              <h3 className={styles.tituloRight}>Promociones activas {'(3)'}</h3>
              <div className={styles.promocionesGrid}>
                <div className={styles.contenedorPromocionesActivas}>
                  <div className={styles.promocion1}>
                    <button onClick={cambioPromocion1} className={promocion1 ? styles.btnPromocion : styles.btnPromocion2}><span>Brown4days</span></button>
                  </div>
                  <div className={styles.promocion2}>
                    <button onClick={cambioPromcion2}  className={promocion2 ? styles.btnPromocion : styles.btnPromocion2}><span>weluvlupulosa</span></button>
                  </div>
                  <div className={styles.promocion3}>
                    <button onClick={cambioPromcion3} className={promocion3 ? styles.btnPromocion : styles.btnPromocion2 }>aguaypan</button>
                  </div>

                </div>


                <div className={styles.contenedorDraft}>
                  <div>
                      <button onClick={cambioPromocionesPublicadas} className={styles.contenedorPromocionesPublicadas}>
                        <div className={styles.promocionesPublicadas}>
                          <h3>Promociones</h3>
                          <p>Ver el listado completo de<br/>
                          tus promociones publicadas
                          </p>
                        </div>
                        <i className="bi bi-card-checklist"></i>
                      </button>

                      <button onClick={cambioDraft} className={styles.contenedorPromocionesPublicadas}>
                        <div className={styles.promocionesPublicadas}>
                            <h3>Drafts</h3>
                            <p>Ver el listado de promociones<br/>
                            sin completar
                            </p>
                        </div>
                          <i className="bi bi-shop-window"></i>
                      </button>
                    </div>
                </div>
              </div>
          </div>

          <div>
            <div className={styles.reservacionDia}>
              <p ><span >Reservaciones del dia </span>para la promoción <span className={styles.negrita}>{nombrePromocion}</span> </p>
              <p><a onClick={promocionesTotales}>ver todas las reservaciones</a></p>
              
            </div>
            <div>
              {promocion1&& <Promocion1/>}
              {promocion2 &&<Promocion2/>}
              {promocion3 && <Promocion3/>}
            </div>
          </div>
        </div>
      </main>
      
      }
      {nuevaPromocion&& 
      <NuevaPromocion
        setHomeContenido={setHomeContenido}
        setNuevaPromocion={setNuevaPromocion}
      />}
      {totalPromociones&& 
      <PromocionesTotales
        setTotalPromociones={setTotalPromociones}
        setHomeContenido={setHomeContenido}
      />}
      {drafts&&
      <Drafts
        setDrafts={setDrafts}
        setHomeContenido={setHomeContenido}
      />}
      {promocionesPublicadas&&
      <PromocionesPublicadas
        setHomeContenido={setHomeContenido}
        setPromocionesPublicadas={setPromocionesPublicadas}
      />}

      </>
    </Layout>
  )
}
