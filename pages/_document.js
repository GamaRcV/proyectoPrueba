import {Html, Head, Main, NextScript} from 'next/document'

export default function Document(){
    
    return(
        <Html>
            <Head>
                <meta title='Zwappy' name='description' content='Zwappy'/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Poppins:wght@400;700;900&display=swap" rel="stylesheet"/>
                <link rel='stylesheet' href='https://necolas.github.io/normalize.css/8.0.1/normalize.css'/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}