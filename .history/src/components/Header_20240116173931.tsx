import Head from 'next/head'
// import Link from 'next/link'
import { Logo } from './Icons'
// import { useRouter } from "next/router";
import styles from '../app/page.module.css'

const Header = () => {
    // const router = useRouter();

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <header className={styles.header}>
                Testiiiiiiiiiteest
                <div className={styles.logo}>
                    <a href="/">
                        <a>
                            <Logo />
                        </a>
                    </a>
                </div>
                {/* <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><Link href="/"><a className={router.pathname == "/" ? styles.active : null}>Home</a></Link></li>
                        <li className={styles.navItem}><Link href="/about"><a className={router.pathname == "/about" ? styles.active : null}>About</a></Link></li>
                    </ul>
                </nav> */}
            </header>
        </>
     );
}
export default Header;