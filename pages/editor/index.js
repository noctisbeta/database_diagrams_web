import Head from 'next/head'
import Image from 'next/image'



export default function Editor() {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <iframe src="http://localhost:8000/" scrolling="no"></iframe>
            </main>


        </div>
    )
}


