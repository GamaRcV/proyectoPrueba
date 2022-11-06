import Head from "next/head"
import Header from '../components/header'
import Navegacion from '../components/navegacion'



export default function Layout({ children, title = '', description = '' }) {
  return (
    <div>
      <Head>
        <title>{`Zwappy - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header/>
      <div className="flex">
        <Navegacion/>
        {children} 
      </div>
    </div>
  )
}