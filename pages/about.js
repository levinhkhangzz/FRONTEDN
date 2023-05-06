import Head from 'next/head'
import aboutStyles from '../styles/about.module.css';

const about = () => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <h1>We are <b>Vega<i>Corner</i></b></h1>
        </div>
    )
}

export default about