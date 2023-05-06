import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.navMain}>
            <Link className={navStyles.navLogo} href='/'>Vega<i>Corner</i></Link>
            <div className={navStyles.navLink}>
                <Link href='/list'>Recipes</Link>
                <Link href='/about'>About</Link>
            </div>
            </div>
            <div className={navStyles.navLine}/>
        </nav>
    )
}

export default Nav