import Link from "next/link";
import styles from './Navbar.module.scss'

const Navbar = () => {

    return(
        <div className={styles.main}>
        <ul>
            <li><Link href="/"><a>Accueil</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/user"><a>User</a></Link></li>
        </ul>
        </div>
    );

};

export default Navbar;