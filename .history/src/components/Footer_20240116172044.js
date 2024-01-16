import Link from 'next/link'
import SocialMedia from './SocialMedia';
// import { useRouter } from "next/router";

const Footer = () => {
    // const router = useRouter();

    return (
        <footer className={styles.footer}>
            <span>©2021</span>
            <SocialMedia />
            {/* <Link href="/imprint"><a className={router.pathname == "/imprint" ? styles.active : null}>Imprint</a></Link> */}
        </footer>
     );
}
export default Footer;